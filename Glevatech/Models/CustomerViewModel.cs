namespace Glevatech.Models
{
    public class CustomerViewModel
    {
        public IEnumerable<Customer> Customers { get; set; }
        public string SearchType { get; set; }
        public string CustomerStatus { get; set; }
        public Pager Pager { get; set; }
        public string SearchValue { get; set; }
        public string StatusValue { get; set; }
    }
}
