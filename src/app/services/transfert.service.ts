import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor( private route:Router) { }

  private number!:number;

  setData(number:number){
    this.number = number;
  }

  getData(){
    let temp = this.number;
    this.clearData();
    return temp;
  }

  clearData(){
    this.number = NaN;
  }
}
