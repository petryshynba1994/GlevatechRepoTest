using Glevatech.Data;
using Glevatech.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace Glevatech.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        ApplicationContext context;
        public HomeController(ILogger<HomeController> logger, ApplicationContext context)
        {
            _logger = logger;
            this.context = context;
        }

        public async Task <IActionResult> Index()
        {
            var heatPumps = await context.HeatPumps.Where(x => x.Status == "активний").OrderBy(x => x.Power).ToListAsync();
            return View(heatPumps);
        }

        public IActionResult Contacts()
        {
            return View();
        }
        public IActionResult AboutHeatPumps()
        {
            return View();
        }
        public IActionResult ToClients()
        {
            return View();
        }
        public IActionResult Map()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult HeatLossCalculator()
        {
            //var cities = await context.Cities.ToListAsync();
            //var materials = await context.Materials.ToListAsync();
            //var windows = await context.Windows.ToListAsync();
            //// Создаем элемент "Виберіть матеріал" и добавляем его в список материалов
            //var firstMaterial = new Material { Name = "Виберіть матеріал", Сoefficient = 0 };
            //materials.Insert(0, firstMaterial);

            //// Создаем списки SelectList для использования в представлении
            //var citySelectList = cities.Select(x => new SelectListItem { Text = x.Name, Value = x.Temperature.ToString() }).ToList();
            //var materialsSelectList = materials.Select(x => new SelectListItem { Text = x.Name, Value = x.Сoefficient.ToString() }).ToList();
            //var windowsSelectList = windows.Select(x => new SelectListItem { Text = x.Name, Value = x.Сoefficient.ToString() }).ToList();

            //// Помещаем списки в ViewBag для передачи их в представление
            //ViewBag.Cities = citySelectList;
            //ViewBag.Materials = materialsSelectList;
            //ViewBag.Windows = windowsSelectList;
            return View();
        }


    }
}