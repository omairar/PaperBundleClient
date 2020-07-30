import { Component, OnInit } from '@angular/core';
import {DescriptionFilteredService} from '../services/description-filtered.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-filtered-details',
  templateUrl: './show-filtered-details.component.html',
  styleUrls: ['./show-filtered-details.component.css']
})
export class ShowFilteredDetailsComponent implements OnInit {

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

  constructor(private dfs: DescriptionFilteredService,
    private _location: Location) { }

  ngOnInit(): void {
    this.item=this.dfs.getItem();
  }

  goBackOneStep(){
    this._location.back();
  }

}
