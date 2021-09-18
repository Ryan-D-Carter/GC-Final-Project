import { MetObjects } from './../models/MetObjects';
import { MetAPIService } from './../services/met-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { ListBySearchTerm } from '../models/ListBySearchTerm';

@Component({
  selector: 'app-met-app',
  templateUrl: './met-app.component.html',
  styleUrls: ['./met-app.component.css']
})
export class MetAppComponent implements OnInit {

  metObj: MetObjects;
  listBySearchTerm: ListBySearchTerm;
  userSearchSelection: string = '';
  searchArray: number [] = [];
  searchTermArray: string[] = [
       "painting", "ceramic","sculpture", "printing",  "costume", "drawings",
       "photograph", "textile", "furniture", "jewelery"
     ];
  randomValue: number;
  //testArray = [1 , 2, 3, 4 , 5, 6, 7, 8, 9, 10]


  constructor(private metAPIservice: MetAPIService) { }


  ngOnInit() {
      console.log("made it to the app component")
      this.getMetObjById(436529);
   }

   //when the user selects a searchterm from the drop down, this method assigns the value to property userSearchSelection
    //then sets that value as a parameter in the function to find the list of ojects from the search term (below)
    submitSearchTerm(e: any) {
      this.userSearchSelection = e.target.value;
        console.log(this.userSearchSelection);
      this.getObjListBySearchTerm(this.userSearchSelection); //assigns ListBySearchTerm values (a list of objects that meet that searchterm)
        console.log("end of submitSearchTerm method")

    }

    //accesses the API to return a list of object IDs (number array) (model: listBySearchTerm)
    getObjListBySearchTerm(searchTerm: string) {
        console.log("beginning of getObjListBySearchterm")
        console.log(`term: ${searchTerm}`);
      this.metAPIservice.getObjectListBySearchTerm(searchTerm).subscribe(
         result => {
           this.listBySearchTerm = result;
           console.log(this.listBySearchTerm.objectIDs);
           console.log("end of getObjListBySearchterm")
         },
         error => console.log(error)
      )};

   //then we need to get a random number from that list of Object IDs
   getRandomValue(array: number[]) :number {
      console.log("beginning of getObjListBySearchterm getRandomValue")
      var randIndex = Math.floor(Math.random() * array.length)
       console.log(randIndex);
       this.randomValue = array[randIndex];
       console.log(this.randomValue);
       return this.randomValue;
     }

   //and send that random number to this method, which will get the JSON of object details, which we will display.
   getMetObjById(objectId: number) {
     this.metAPIservice.getObjectById(objectId).subscribe(
       result => {
         this.metObj = result;
         console.log(this.metObj);
       },
       error => console.log(error)
   )};

    onSelect() {
      var rand = this.getRandomValue(this.listBySearchTerm.objectIDs);
      this.getMetObjById(rand);
    }

    onLike() {
      var rand = this.getRandomValue(this.listBySearchTerm.objectIDs);
      this.getMetObjById(rand);
    }

    onDislike() {
      var testvalue = this.getRandomValue(this.listBySearchTerm.objectIDs);
      this.getMetObjById(testvalue);
    }

}
