import { MetObjects } from './../models/MetObjects';
import { MetAPIService } from './../services/met-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-met-app',
  templateUrl: './met-app.component.html',
  styleUrls: ['./met-app.component.css']
})
export class MetAppComponent implements OnInit {

  /*/* THE APP:
  1. select a medium to filter by and press the button
  2. get the JSON for getObjByMedium & assign it to model ListByMedium --
  3. select a random number from that array
  4. send that number to the getMetObjById api & return the obj details
  5. onClickLike methods & onClickDislike methods?
  */

  metObj: MetObjects[] =[];

  constructor(private metAPIservice: MetAPIService) { }


  ngOnInit() {
    this.getMetObjById(838076);
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

}
