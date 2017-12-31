import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { BoissonModalPage } from '../boisson-modal/boisson-modal';
import { DessertModalPage } from '../dessert-modal/dessert-modal';
import { SandwitchModalPage } from '../sandwitch-modal/sandwitch-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menu: any;

  constructor(public modalCtrl: ModalController, public restProvider: RestProvider) {
    this.getMenu();
  }

  getMenu() {
    this.restProvider.getMenu()
    .then(data => {
      console.log(data);
      let myMenu = <any>{};
      myMenu = data;
      this.menu= myMenu.data;
      console.log(this.menu);
    });
  }

  openBoisson() {
    let myModal = this.modalCtrl.create(BoissonModalPage);
    myModal.present();
  }

  openDessert() {
    let myModal = this.modalCtrl.create(DessertModalPage);
    myModal.present();
  }

  openSandwitch() {
    let myModal = this.modalCtrl.create(SandwitchModalPage);
    myModal.present();
  }

}
