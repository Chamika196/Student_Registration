using Student_Registration.API.DTO;
using Student_Registration.API.Models;

namespace Student_Registration.API.Data.Repos
{
    public interface IStudentRepository
    {
        Task<IEnumerable<Student>> GetAllAsync();
        Task<Student?> GetById(int id);
        Task<Student> CreateAsync(Student student);
        Task<Student?> UpdateAsync(Student student);
        Task<Student?> DeleteAsync(int id);
        
        
        
    }
}
