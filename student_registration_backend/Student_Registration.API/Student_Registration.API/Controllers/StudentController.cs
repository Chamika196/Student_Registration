using Microsoft.AspNetCore.Mvc;
using Student_Registration.API.Data.Repos;
using Student_Registration.API.DTO;
using Student_Registration.API.Models;

namespace Student_Registration.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : Controller
    {
        private readonly IStudentRepository studentRepository;

        public StudentController(IStudentRepository studentRepository)
        {
            this.studentRepository = studentRepository;
        }

        //create new student
        [HttpPost]
        public async Task<IActionResult> CreateStudent([FromBody] CreateStudentRequestDto request)
        {
            try
            {
                //Map DTO to Domain Model

                var student = new Student
                {
                    FirstName= request.FirstName,
                    LastName= request.LastName,
                    Mobile = request.Mobile,
                    Email= request.Email,
                    NIC= request.NIC,
                    ProfileImage= request.ProfileImage,
                    DateOfBirth= request.DateOfBirth,
                    Address= request.Address,   
                };

                await studentRepository.CreateAsync(student);

                //Map Domain model to DTO

                var response = new StudentDto
                {
                    StudentId = student.StudentId,
                    FirstName = student.FirstName,
                    LastName = student.LastName,
                    Mobile = student.Mobile,
                    Email = student.Email,
                    NIC = student.NIC,
                    ProfileImage = student.ProfileImage,
                    DateOfBirth = student.DateOfBirth,
                    Address = student.Address,
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }

        }
        //https://localhost:7278/api/Students
        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            try
            {
                var students = await studentRepository.GetAllAsync();

                // Return an empty list if no tasks are found
                if (students == null || !students.Any())
                {
                    return Ok(new List<StudentDto>());
                }

                // Map Domain model to DTO
                var response = new List<StudentDto>();
                foreach (var student in students)
                {
                    response.Add(new StudentDto
                    {
                        StudentId = student.StudentId,
                        FirstName = student.FirstName,
                        LastName = student.LastName,
                        Mobile = student.Mobile,
                        Email = student.Email,
                        NIC = student.NIC,
                        ProfileImage = student.ProfileImage,
                        DateOfBirth = student.DateOfBirth,
                        Address = student.Address,
                    });
                }

                return Ok(response);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }

        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetStudentById([FromRoute] int id)
        {
            try
            {
                var existingStudent = await studentRepository.GetById(id);
                if (existingStudent == null)
                {
                    return NotFound();
                }

                // Map Domain model to DTO
                var response = new StudentDto
                {
                    StudentId = existingStudent.StudentId,
                    FirstName = existingStudent.FirstName,
                    LastName = existingStudent.LastName,
                    Mobile = existingStudent.Mobile,
                    Email = existingStudent.Email,
                    NIC = existingStudent.NIC,
                    ProfileImage = existingStudent.ProfileImage,
                    DateOfBirth = existingStudent.DateOfBirth,
                    Address = existingStudent.Address,

                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> EditStudent([FromRoute] int id, UpdateStudentRequestDto request)
        {
            try
            {
                // Map DTO to Domain Model
                var student= new Student
                {
                    StudentId = id,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Mobile = request.Mobile,
                    Email = request.Email,
                    NIC = request.NIC,
                    ProfileImage = request.ProfileImage,
                    DateOfBirth = request.DateOfBirth,
                    Address = request.Address,
                };

                student = await studentRepository.UpdateAsync(student);

                if (student == null)
                {
                    return NotFound();
                }

                // Convert Domain model to DTO
                var response = new StudentDto
                {
                    StudentId = student.StudentId,
                    FirstName = student.FirstName,
                    LastName = student.LastName,
                    Mobile = student.Mobile,
                    Email = student.Email,
                    NIC = student.NIC,
                    ProfileImage = student.ProfileImage,
                    DateOfBirth = student.DateOfBirth,
                    Address = student.Address,

                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] int id)
        {
            try
            {
                var student = await studentRepository.DeleteAsync(id);
                if (student == null)
                {
                    return NotFound();
                }

                // Convert Domain model to DTO
                var response = new StudentDto
                {
                    StudentId = student.StudentId,
                    FirstName = student.FirstName,
                    LastName = student.LastName,
                    Mobile = student.Mobile,
                    Email = student.Email,
                    NIC = student.NIC,
                    ProfileImage = student.ProfileImage,
                    DateOfBirth = student.DateOfBirth,
                    Address = student.Address,

                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while processing your request.");
            }
        }
    }
}
