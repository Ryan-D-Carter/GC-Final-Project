import { ListBySearchTerm } from './../models/ListBySearchTerm';
import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { MetAPIService } from '../services/met-api.service';
import { MetObjects } from '../models/MetObjects';
import { NgForm } from '@angular/forms';

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

  mediumArray: string[] = [
    "painting", "ceramic","sculpture", "printing",  "costume", "drawings",
    "photograph", "textile", "furniture", "jewelery"
  ];

  listBySearchTerm: ListBySearchTerm[] =[];
  dummySearchTerm: string = "painting";
  searchTerm: string = '';
  metObj: MetObjects[] =[];
  //selection: ListBySearchTerm = {total: 0, objectIDs: []};

  constructor(private metAPIservice: MetAPIService) {
    this.getMetObjById(838076);
  }


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


  getMetObjById(objectId: number) {
    this.metAPIservice.getObjectById(objectId).subscribe(
      result => {
        this.metObj = result;
        console.log(this.metObj);
      },
      error => console.log(error)
    );
  }

  //when the user presses select, it should send the value to get objects by search term
  submitSearchTerm(form: NgForm) {
    this.searchTerm = form.form.value;
    console.log(this.searchTerm);
  }


}
