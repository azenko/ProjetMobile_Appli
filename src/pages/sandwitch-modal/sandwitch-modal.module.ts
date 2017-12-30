import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SandwitchModalPage } from './sandwitch-modal';

@NgModule({
  declarations: [
    SandwitchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SandwitchModalPage),
  ],
})
export class SandwitchModalPageModule {}
