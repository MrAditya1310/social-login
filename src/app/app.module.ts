import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import{SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from 'angular4-social-login';
import { AppComponent } from './app.component';


const google_oauth_client_id:string="463697366722-4mfphckvuvf3e5ultik751jhd66cc7rb.apps.googleusercontent.com"

let config = new AuthServiceConfig([

  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider(google_oauth_client_id)
  }
])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
