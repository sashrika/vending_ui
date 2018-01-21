import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private _userService:UserService) { }

  ngOnInit() {
  }

  login(e){
    let username = e.target.form[0].value;
    let password = e.target.form[1].value;
    if(username == 'f88' && password == 'f88'){
      this.router.navigate(['home']);
      this._userService.setUserLoggedIn();
    }
  }

}
