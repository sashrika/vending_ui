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
  // public apiBaseUrl:string = "http://localhost:8000";
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

  updateStorage(storageId:number,storageToBeUpdated:Storage) {
    this.http.post(this.apiBaseUrl + "/storage/"+storageId,JSON.stringify(storageToBeUpdated),{responseType: 'text'}).subscribe((data: any) => {
    });
  }

  reserveStorage(storageId:number){
    let storageToBeUpdated:Storage  = this.locateStorage(storageId);
    storageToBeUpdated.isOccupied=true;
    this.updateStorage(storageId,storageToBeUpdated);
  }

  locateStorage(storageId:number):Storage {
    let storageToBeUpdated:Storage = this.storages.find((element)=> {
      return element.storageId == storageId;
    });
    return storageToBeUpdated;
  }


}
