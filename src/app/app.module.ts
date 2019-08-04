import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouteReuseStrategy, Routes } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// AWS-AMPLIFY - https://aws-amplify.github.io/amplify-js/media/angular_guide
import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";
import Amplify, { Auth } from "aws-amplify";
import config from "../aws-exports";

debugger
Amplify.configure({
  ...config,
  //complexObjectsCredentials: () => Auth.currentCredentials()
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AmplifyAngularModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
