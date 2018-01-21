import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Spiral } from "../models/spiral";
import { Space } from "../models/space";
import { Storage } from "../models/storage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public apiBaseUrl:string = "http://139.59.4.88/api";
  storages:Storage[];
  vending_1:Spiral[];
  vending_2:Space[];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getVending1Data();
    this.getVending2Data();
    this.getStorageData();
  }

  getVending1Data(){
    this.http.get(this.apiBaseUrl + "/vending/1").subscribe((data: Spiral[]) => {
      this.vending_1 = data;
    });
  }

  getVending2Data() {
    this.http.get(this.apiBaseUrl + "/vending/2").subscribe((data: Space[]) => {
      this.vending_2 = data;
    });
  }

  getStorageData() {
    this.http.get(this.apiBaseUrl + "/storages").subscribe((data: Storage[]) => {
      this.storages = data;
    });
  }

  fetchStorages() {
    return new Promise(function (resolve, reject) {
      this.http.get(this.apiBaseUrl + "/storages").subscribe((data: Storage[]) => {
        resolve(data);
      });
    });
  }

}
