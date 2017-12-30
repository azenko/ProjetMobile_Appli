import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the SandwitchModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sandwitch-modal',
  templateUrl: 'sandwitch-modal.html',
})
export class SandwitchModalPage {

  sandwitches: any;

  constructor(public viewCtrl: ViewController, public restProvider: RestProvider) {
    this.getSandwitches();
  }

  getSandwitches() {
    this.restProvider.getSandwitches()
    .then(data => {
      console.log(data);
      let mySandwitches = <any>{};
      mySandwitches = data;
      this.sandwitches = mySandwitches.data;
      console.log(this.sandwitches);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SandwitchModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
