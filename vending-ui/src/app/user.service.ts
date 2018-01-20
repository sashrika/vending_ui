import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn:boolean;

  constructor() { 
    this.isUserLoggedIn = false;
    // alert(this.isUserLoggedIn);
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  setUserLogOut(){
    this.isUserLoggedIn = false;
  }

}
