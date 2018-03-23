import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Ford','Ferrari','Lotus','Audi'];

  myData(){
    return this.cars;
  }
}
