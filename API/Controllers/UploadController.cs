
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UploadController : ControllerBase
    {

        [HttpPost]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            //Simulation I read Sheets Name form Workbook and return name as string array 
            Thread.Sleep(5000);
            string[] sheets = new string[3] { "sheet1", "sheet2", "sheet3" };
            return Ok(sheets);
        }
    }
}