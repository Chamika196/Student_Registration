namespace Student_Registration.API.Models
{
    public class Student
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string NIC { get; set; }
        public string ProfileImage { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
    }
}
