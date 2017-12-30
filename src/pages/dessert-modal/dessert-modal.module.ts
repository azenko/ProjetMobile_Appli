import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DessertModalPage } from './dessert-modal';

@NgModule({
  declarations: [
    DessertModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DessertModalPage),
  ],
})
export class DessertModalPageModule {}
