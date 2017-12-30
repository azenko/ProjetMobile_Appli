import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the DessertModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dessert-modal',
  templateUrl: 'dessert-modal.html',
})
export class DessertModalPage {

  desserts: any;

  constructor(public viewCtrl: ViewController, public restProvider: RestProvider) {
    this.getDesserts();
  }

  getDesserts() {
    this.restProvider.getDesserts()
    .then(data => {
      console.log(data);
      let myDesserts = <any>{};
      myDesserts = data;
      this.desserts = myDesserts.data;
      console.log(this.desserts);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DessertModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
