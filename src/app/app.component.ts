import { Component } from '@angular/core';
import {AuthService,GoogleLoginProvider} from 'angular4-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-login';
user:any;
constructor(private _socioAuthServ:AuthService){}

signIn(platform:string):void{
  platform = GoogleLoginProvider.PROVIDER_ID ;
  this._socioAuthServ.signIn(platform).then((response)=> {
  console.log(platform + "logged in google is =" ,response);
  this.user =response;
     }
  );
   }
}

