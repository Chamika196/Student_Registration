using Microsoft.EntityFrameworkCore;
using Student_Registration.API.Data.Context;
using Student_Registration.API.Models;

namespace Student_Registration.API.Data.Repos
{
    public class StudentRepository : IStudentRepository
    {
        private readonly ApplicationDbContext db;

        public StudentRepository(ApplicationDbContext db)
        {
            this.db = db;
        }
        public async Task<Student> CreateAsync(Student student)
        {
            await db.Students.AddAsync(student);
            await db.SaveChangesAsync();
            return student;
        }

        public async Task<Student?> DeleteAsync(int id)
        {
            var existingStudent = await db.Students.FirstOrDefaultAsync(x => x.StudentId == id);
            if (existingStudent is null)
            {
                return null;
            }
            db.Students.Remove(existingStudent);
            await db.SaveChangesAsync();
            return existingStudent;
        }

        public async Task<IEnumerable<Student>> GetAllAsync()
        {
           return await db.Students.ToListAsync();  
        }

        public async Task<Student?> GetById(int id)
        {
            return await db.Students.FirstOrDefaultAsync(x => x.StudentId == id);
        }

        public async Task<Student?> UpdateAsync(Student student)
        {
            var existingStudent = await db.Students.FirstOrDefaultAsync(x => x.StudentId==student.StudentId);
            if (existingStudent != null)
            {
                db.Entry(existingStudent).CurrentValues.SetValues(student);
                await db.SaveChangesAsync();
                return student;
            }

            return null;
        }
    }
}
