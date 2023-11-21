import { Component } from '@angular/core';
import { AuthServiceService } from './Authentication/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemoApp';
  constructor(private Auth:AuthServiceService,private router : Router){
      Auth.logout();
     
  }
  isloggedin():boolean{
    return this.Auth.isloggedin();
  }
  logout(){
    this.Auth.logout();
  }

}
