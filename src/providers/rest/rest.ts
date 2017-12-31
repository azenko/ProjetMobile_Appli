import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://ec2-52-47-114-81.eu-west-3.compute.amazonaws.com/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getMenu() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/menu').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getDesserts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/desserts').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getBoissons() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/boissons').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSandwitches() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/sandwitches').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addDessert(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/desserts', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
