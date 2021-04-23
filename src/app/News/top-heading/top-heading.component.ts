import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../service/news-service.service'
import * as $ from 'jquery'

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  currentDate:Date;
  constructor(private _services:NewsServiceService) {
    this.currentDate = new Date();
   }

  topheadingDisplay:any=[];

  ngOnInit(): void {
    //debugger;
    this._services.topHeading().subscribe((result =>{
      console.log(result)
      this.topheadingDisplay = result.articles;
    }))


    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );
  }

  

}
