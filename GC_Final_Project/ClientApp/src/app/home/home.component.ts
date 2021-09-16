import { ListBySearchTerm } from '../models/ListBySearchTerm';
import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { MetAPIService } from '../services/met-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

 /*/* THE APP:
  1. select a medium to filter by and press the button
  2. get the JSON for getObjByMedium & assign it to model ListByMedium --
  3. select a random number from that array
  4. send that number to the getMetObjById api & return the obj details
  5. onClickLike methods & onClickDislike methods?
  */


  listBySearchTerm: ListBySearchTerm[] =[];
  dummySearchTerm: string = "painting"

  constructor(private metAPIservice: MetAPIService) { }


  ngOnInit() {
    //this.getObjListBySearchTerm(this.dummySearchTerm);
   }

  getObjListBySearchTerm(searchTerm: string) {
    this.metAPIservice.getObjectListBySearchTerm(searchTerm).subscribe(
      result => {
        this.listBySearchTerm = result;
        console.log(this.listBySearchTerm);
      },
      error => console.log(error)
    );
  }

  // get


}
