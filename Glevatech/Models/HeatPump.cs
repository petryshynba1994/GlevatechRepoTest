using System.ComponentModel.DataAnnotations;

namespace Glevatech.Models
{
    public class HeatPump
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Впишіть назву моделі")]
        public string Name { get; set; }      
        public string Type { get; set; }    
        public string Status { get; set; }
        [Required(ErrorMessage = "Впишіть потужність даної моделі")]
        public int Power { get; set; }
        [Required(ErrorMessage = "Впишіть орієнтовну площу обігріву")]
        public int HeatArea { get; set; }
        [Required(ErrorMessage = "Впишіть вартість даної моделі")]
        public int Price { get; set; }
        public List<Customer>? Customers { get; set; }
    }  

}
