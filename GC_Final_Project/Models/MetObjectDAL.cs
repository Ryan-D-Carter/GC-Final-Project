using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using static GC_Final_Project.Models.MetObject;

namespace GC_Final_Project.Models
{
    public class MetObjectDAL
    {
        private HttpClient GetHttpClient()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://collectionapi.metmuseum.org");
            return client;
        }

        //getObjById/{id}
        public async Task<int> GetMetObjectById(int id)
        {
            var client = GetHttpClient();

            var response = await client.GetAsync($"/public/collection/v1/objects/{id}");

            var metObj = await response.Content.ReadAsAsync<MetObject.Rootobject>();

            return metObj.objectID;
        }


    }
}
