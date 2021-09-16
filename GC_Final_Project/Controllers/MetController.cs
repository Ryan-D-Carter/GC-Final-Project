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

        [HttpGet("getObjById/{id}")] //TODO: need / at beginning?
        public async Task<ActionResult<int>> IndexAsync(int id)
        {
            var metObj = await _metObjectDAL.GetMetObjectById(id);

            return metObj;
        }

        [HttpGet("GetObjByMedium/{medium}")]
        public async Task<MetObject> GetObjByMedium(string medium)
        {
            var list = await _metObjectDAL.GetMetObjsByMedium(medium);

            return list;
        }

    }
}
