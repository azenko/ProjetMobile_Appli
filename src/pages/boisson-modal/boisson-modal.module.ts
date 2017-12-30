import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoissonModalPage } from './boisson-modal';

@NgModule({
  declarations: [
    BoissonModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BoissonModalPage),
  ],
})
export class BoissonModalPageModule {}
