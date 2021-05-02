import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../service/news-service.service';
import * as $ from 'jquery';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  currentDate:Date;
  constructor(private _services:NewsServiceService,private httpClient: HttpClient) {
    this.currentDate = new Date();
   }

  topheadingDisplay:any=[];

  ngOnInit(): void {
    //debugger;
    // this._services.topHeading().subscribe((result =>{
    //   //debugger;
    //   console.log(result.data)
    //   this.topheadingDisplay = result.data;
    // }))

    this.httpClient.get("../assets/JSONFiles/NEWS/headlines.json").subscribe((result =>{
      //debugger;
      console.log(result)
      this.topheadingDisplay = result;
    }))


    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );
  }

  

}
