import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn:boolean;
  private userName:string;

  constructor() { 
    this.isUserLoggedIn = false;
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

  public setUserName(userName){
    this.userName = userName;
  }

  public getUserName():string{
    return this.userName;
  }

}
