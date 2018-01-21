import { Component, OnInit } from '@angular/core';
import { VendingMetaData } from "../vending_metadata";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public vending_1:VendingMetaData;
  public vending_2:VendingMetaData;
  public apiBaseUrl:string = "http://139.59.4.88/api";


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.vending_1 = {
      max: 7,
      remaining: 4
    };
    this.vending_2 = {
      max: 7,
      remaining: 3
    };
    this.getVending1Data();
  }

  getVending1Data (): Observable<string[]> {
    this.http.get(this.apiBaseUrl+"/test").subscribe((data:any)=>{
      console.log(data);
    })
    
    return;
  }

}
