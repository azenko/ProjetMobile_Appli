import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';

import { BoissonModalPage } from '../pages/boisson-modal/boisson-modal';
import { DessertModalPage } from '../pages/dessert-modal/dessert-modal';
import { SandwitchModalPage } from '../pages/sandwitch-modal/sandwitch-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BoissonModalPage,
    DessertModalPage,
    SandwitchModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BoissonModalPage,
    DessertModalPage,
    SandwitchModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
