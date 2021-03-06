using GC_Final_Project.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GC_Final_Project.Controllers
{
    public class LikesController : Controller
    {
        private readonly MappsterpiecesDBContext _context;
        public LikesController(MappsterpiecesDBContext context)
        {
            _context = context;
        }

        [HttpDelete("{ObjectId}")]
        public async Task<ActionResult> DeleteLikes(int EntryId)
        {
            TheLike theLike = _context.TheLikes.Where(x => x.EntryId == EntryId).FirstOrDefault();

            if (theLike is object)
            {
                _context.TheLikes.Remove(theLike);

                await _context.SaveChangesAsync();

                return NoContent();
            }

            return NotFound();
        }

        [HttpPost("NewLike")]
        public async Task<ActionResult<TheLike>> AddLike(MetObject.Rootobject mObj, Visitor currentVisitor)
        {
            var newLike = new TheLike();

            newLike.ObjectId = mObj.objectID;
            newLike.VisitorId = currentVisitor.VisitorId;
            newLike.Department = mObj.department;

            _context.TheLikes.Add(newLike);
            await _context.SaveChangesAsync();
            return Ok(newLike);
        }
    }
}
