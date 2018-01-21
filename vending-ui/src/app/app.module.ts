import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SpaceAvailabilityPipe } from './space-availability.pipe'

const appRoutes:Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',component:LoginComponent,pathMatch:'full'
  }
]
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SpaceAvailabilityPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
