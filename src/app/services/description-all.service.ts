import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionALLService {

  item : 
  {size: string, 
    gsm: string, 
    quality: string, 
    mills: string, 
    reemwt: string, 
    reemqty: string,
    bundleqty: string,
    wght: string
  }
  

  initiaItem(incommingItm){
    this.item=incommingItm;
  }

  getItem(){
    return this.item;
  }
  constructor() { }
}
