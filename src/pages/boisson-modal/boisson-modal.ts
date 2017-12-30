import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the BoissonModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boisson-modal',
  templateUrl: 'boisson-modal.html',
})
export class BoissonModalPage {

  boissons: any;

  constructor(public viewCtrl: ViewController, public restProvider: RestProvider) {
    this.getBoissons();
  }

  getBoissons() {
    this.restProvider.getBoissons()
    .then(data => {
      console.log(data);
      let myBoissons = <any>{};
      myBoissons = data;
      this.boissons = myBoissons.data;
      console.log(this.boissons);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoissonModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
