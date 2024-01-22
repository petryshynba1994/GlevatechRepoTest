using System.ComponentModel.DataAnnotations;

namespace Glevatech.Models
{
    public class Customer
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Поле з ім'ям обов'язкове до заповненння")]
        public string Name { get; set; }
        public string? Surname { get; set; }
        public string? SecondName { get; set; }
        public string? Status { get; set; }
        [Required(ErrorMessage = "Поле з номером телефону обов'язкове до заповненння")]
        public string Phone { get; set; }     
        public string? Address { get; set; }
        public int? Area { get; set; }
        public string? BuyDate { get; set; }
        public string? InstallDate { get; set; }
        public string? EndOfWarranty { get; set; }
        public int? SelectedHeatPumpId { get; set; }
        public HeatPump? SelectedHeatPump { get; set; }
        public string? HeatPumpType { get; set; }
        public int? Price { get; set; }
        public string? Comment { get; set; }
    }
}
