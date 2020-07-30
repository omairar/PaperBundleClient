import { Component, OnInit } from '@angular/core';
import {DescriptionALLService} from "../services/description-all.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-all-details',
  templateUrl: './show-all-details.component.html',
  styleUrls: ['./show-all-details.component.css']
})
export class ShowAllDetailsComponent implements OnInit {

  item : 
  {size: string, 
    gsm: string, 
    quality: string, 
    mills: string, 
    reemwt: string, 
    reemqty: string,
    bundleqty: string
    wght: string
  }

  constructor(private das: DescriptionALLService,
    private _location: Location) { }

  ngOnInit(): void {
    this.item=this.das.getItem();
  }

  goBackOneStep(){
    this._location.back();
  }

}
