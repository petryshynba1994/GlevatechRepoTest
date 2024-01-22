using Glevatech.Data;
using Glevatech.Models;
using Glevatech.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace Glevatech.Controllers
{
    [Authorize(Roles = SD.Role_Admin)]
    public class AdminController : Controller
    {
        ApplicationContext context;
        public AdminController(ApplicationContext context)
        {
            this.context = context;
        }
        protected List<SelectListItem> customersStatus => new List<SelectListItem>
            {
                new SelectListItem {Text = "в роботі", Value = "в роботі"},
                new SelectListItem {Text = "завершений", Value = "завершений" },
            };
        protected List<SelectListItem> heatPumpType => new List<SelectListItem>
        {
            new SelectListItem {Text = "ґрунт-вода", Value = "ґрунт-вода"},
            new SelectListItem {Text = "вода-вода", Value = "вода-вода" },
        };
        protected List<SelectListItem> heatPumpStatus => new List<SelectListItem>
        {
            new SelectListItem {Text = "активний", Value = "активний"},
            new SelectListItem {Text = "неактивний", Value = "неактивний" },
        };
        public async Task<ActionResult> GetCustomers()
        {
            var customers = await context.Customers.ToListAsync();
            return View(customers);
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Customers(string searchValue, string searchType = "по імені", string status = "в роботі", string pageSize = "10", int pg = 1)
        {
            List<Customer> customers = await context.Customers.Where(x => x.Status == status).OrderByDescending(x => x.Id).ToListAsync();
            List<SelectListItem> searchTypes = new List<SelectListItem>
            {
                new SelectListItem {Text = "по імені", Value = "по імені"},
                new SelectListItem {Text = "по прізвищу", Value = "по прізвищу" },
                new SelectListItem {Text = "за номером телефону", Value = "за номером телефону" },
                new SelectListItem {Text = "за адресою", Value = "за адресою" }
            };
            List<SelectListItem> pageSizeOptions = new List<SelectListItem>
            {
                new SelectListItem { Text = "10", Value = "10" },
                new SelectListItem { Text = "20", Value = "20" },
                new SelectListItem { Text = "30", Value = "30" }
            };

            if (searchType == "по імені" && !string.IsNullOrEmpty(searchValue))
            {
                customers = customers.Where(x => x.Name?.IndexOf(searchValue, StringComparison.OrdinalIgnoreCase) >= 0).ToList();
            }
            if (searchType == "по прізвищу" && !string.IsNullOrEmpty(searchValue))
            {
                customers = customers.Where(x => x.Surname?.IndexOf(searchValue, StringComparison.OrdinalIgnoreCase) >= 0).ToList();
            }
            if (searchType == "за номером телефону" && !string.IsNullOrEmpty(searchValue))
            {
                customers = customers.Where(x => x.Phone?.IndexOf(searchValue, StringComparison.OrdinalIgnoreCase) >= 0).ToList();
            }
            if (searchType == "за адресою" && !string.IsNullOrEmpty(searchValue))
            {
                customers = customers.Where(x => x.Address?.IndexOf(searchValue, StringComparison.OrdinalIgnoreCase) >= 0).ToList();
            }
            int recsCount = customers.Count();
            var pager = new Pager(recsCount, pg, int.Parse(pageSize));
            int recSkip = (pg - 1) * int.Parse(pageSize);
            var data = customers.Skip(recSkip).Take(int.Parse(pageSize)).ToList();
            var model = new CustomerViewModel()
            {
                Customers = data,
                Pager = pager,
                SearchValue = searchValue,
                SearchType = searchType,
                StatusValue = status
            };
            ViewBag.CustomersStatus = customersStatus;
            ViewBag.SearchTypes = searchTypes;
            ViewBag.PageSizeOptions = pageSizeOptions;
            return View(model);
        }


        public async Task<IActionResult> CreateCustomer()
        {
            List<HeatPump> heatPumps = await context.HeatPumps.Where(x => x.Status == "активний").OrderBy(x => x.Power).ToListAsync();
            SelectList heatPumpsList = new SelectList(heatPumps, "Id", "Name");
            ViewBag.HeatPumpsList = heatPumpsList;
            ViewBag.CustomersStatus = customersStatus;          
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> CreateCustomer (Customer customer)
        {
            List<HeatPump> heatPumps = await context.HeatPumps.Where(x => x.Status == "активний").OrderBy(x => x.Power).ToListAsync();
            SelectList heatPumpsList = new SelectList(heatPumps, "Id", "Name");
            ViewBag.HeatPumpsList = heatPumpsList;
            ViewBag.CustomersStatus = customersStatus;
            if (ModelState.IsValid)
            {
                context.Customers.Add(customer);
                await context.SaveChangesAsync();
                return RedirectToAction("Customers", "Admin");
            }
            return View(customer);
        }

        public IActionResult GetHeatPumpsByType(string type)
        {
            if (string.IsNullOrEmpty(type))
            {
                return Json(new { });
            }

            var heatPumps = context.HeatPumps
                .Where(x => x.Status == "активний" && x.Type == type)
                .OrderBy(x => x.Power)
                .Select(heatPump => new
                {
                    Id = heatPump.Id,
                    Name = heatPump.Name,
                    Power = heatPump.Power
                });

            var jsonSerializerOptions = new JsonSerializerOptions
            {
                WriteIndented = false, // Отключить форматирование JSON
                Encoder = null // Отключить кодирование
            };

            var json = JsonSerializer.Serialize(heatPumps, jsonSerializerOptions);

            return Content(json, "application/json");
        }

        public IActionResult GetHeatPumpPower(int id)
        {
            var heatPump = context.HeatPumps.FirstOrDefault(x => x.Id == id);
            var heatPumpPower = heatPump?.Power;
            return Json(new { power = heatPumpPower + " кВт" });
        }
        public IActionResult EditCustomer(int? id)
        {
            List<HeatPump> heatPumps = context.HeatPumps.ToList();
            SelectList heatPumpsList = new SelectList(heatPumps, "Id", "Name");
            ViewBag.HeatPumpsList = heatPumpsList;
            ViewBag.CustomersStatus = customersStatus;
            if (id != null)
            {
                Customer? customer = context.Customers.SingleOrDefault(x => x.Id == id);
                if(customer != null)
                {
                    return View(customer);
                }
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> EditCustomer(Customer customer)
        {
            List<HeatPump> heatPumps = context.HeatPumps.ToList();
            SelectList heatPumpsList = new SelectList(heatPumps, "Id", "Name");
            ViewBag.HeatPumpsList = heatPumpsList;
            ViewBag.CustomersStatus = customersStatus;
            if (ModelState.IsValid)
            {
                context.Customers.Update(customer);
                await context.SaveChangesAsync();
                return RedirectToAction("CustomerDetails", "Admin", new { id = customer.Id });
            }
            return View(customer);
        }
        [HttpPost]
        public IActionResult DeleteCustomer(int? id)
        {
            if(id != null)
            {
                Customer? customer = context.Customers.SingleOrDefault(x => x.Id == id);
                if(customer != null)
                {
                    context.Customers.Remove(customer);
                    context.SaveChanges();
                    return RedirectToAction("Customers", "Admin");
                }
            }          
            return NotFound();
        }

        public IActionResult CustomerDetails (int? id)
        {
            if (id != null)
            {
                Customer? customer = context.Customers.Include(x => x.SelectedHeatPump).SingleOrDefault(x => x.Id == id);
                if (customer != null)
                {
                    return View(customer);
                }
            }         
            return NotFound();           
        }

        //CRUD HeatPump
        public async Task<IActionResult> HeatPumpsList(string status = "активний")
        {
            ViewBag.HeatPumpStatus = heatPumpStatus;
            var heatPumps = await context.HeatPumps.Where(x => x.Status == status).OrderBy(x => x.Power).ToListAsync();
            return View(heatPumps);
        }
        public IActionResult CreateHeatPump()
        {
            ViewBag.HeatPumpStatus = heatPumpStatus;
            ViewBag.HeatPumpType = heatPumpType;
            return View();
        }
        [HttpPost]
        public IActionResult CreateHeatPump(HeatPump heatPump)
        {
            ViewBag.HeatPumpStatus = heatPumpStatus;
            ViewBag.HeatPumpType = heatPumpType;
            if (ModelState.IsValid)
            {
                context.HeatPumps.Add(heatPump);
                context.SaveChanges();
                return RedirectToAction("HeatPumpsList", "Admin");
            }
            return View(heatPump);
        }
        public IActionResult EditHeatPump(int? id)
        {
            ViewBag.HeatPumpStatus = heatPumpStatus;
            ViewBag.HeatPumpType = heatPumpType;
            if (id != null)
            {
                HeatPump? heatPump = context.HeatPumps.SingleOrDefault(x => x.Id == id);
                if(heatPump != null)
                {
                    return View(heatPump);
                }
            }
            return NotFound();
        }
        [HttpPost]
        public IActionResult EditHeatPump(HeatPump heatPump)
        {
            ViewBag.HeatPumpStatus = heatPumpStatus;
            ViewBag.HeatPumpType = heatPumpType;
            if (ModelState.IsValid)
            {
                context.HeatPumps.Update(heatPump);
                context.SaveChanges();
                return RedirectToAction("HeatPumpsList", "Admin");
            }
            return View(heatPump);
        }
        [HttpPost]
        public IActionResult DeleteHeatPump(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            HeatPump heatPump = context.HeatPumps.SingleOrDefault(x => x.Id == id);

            if (heatPump == null)
            {
                return NotFound();
            }

            try
            {
                if (heatPump.Customers != null && heatPump.Customers.Any())
                {
                    throw new DbUpdateException("Тепловой насос связан с клиентами");
                }

                context.HeatPumps.Remove(heatPump);
                context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                var customersNumber = context.Customers.Where(x => x.SelectedHeatPumpId == id).Count();
                var clients = "";
                if (customersNumber == 1)
                {
                    clients = "клієнта";
                }
                else clients = "клієнтів";
                TempData["ErrorMessage"] = $"Нажаль дана модель теплового насосу {heatPump.Name}  не може бути видалена оскільки вона вже є в наявності у {customersNumber} {clients} . Перейдіть до розділу редагування для даної моделі, змініть статус на 'НЕАКТИВНИЙ' та збережіть зміни";
            }

            return RedirectToAction("HeatPumpsList", "Admin");
        }


    }
}
