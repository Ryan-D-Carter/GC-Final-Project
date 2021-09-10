using GC_Final_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GC_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MetController : ControllerBase
    {
        private readonly MetObjectDAL _metObjectDAL = new MetObjectDAL();

        [HttpGet("getObjById/{id}")]
        public async Task<ActionResult<int>> IndexAsync(int id)
        {
            var metObj = await _metObjectDAL.GetMetObjectById(id);

            return metObj;
        }


    }
}
