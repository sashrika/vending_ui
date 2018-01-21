import { Component, OnInit } from '@angular/core';
import { VendingMetaData } from "../vending_metadata";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public vending_1:VendingMetaData;
  public vending_2:VendingMetaData;

  constructor() {
   }

  ngOnInit() {
    this.vending_1 = {
      max:7,
      remaining:4
    };
    this.vending_2 = {
      max:7,
      remaining:3
    };
  }

}
