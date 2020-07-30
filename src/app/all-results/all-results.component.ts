import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseGetService} from '../services/firebase-get.service'
import {DescriptionALLService} from '../services/description-all.service'

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {

  constructor(private rtr: Router,
              private fbs: FirebaseGetService, 
              private das: DescriptionALLService
  ){
  }

  
  itemss: Array<any>;

  ngOnInit(): void {
    
   this.fbs.getUsers()
    .then(result => {
      this.itemss = result;
      console.log(result);
    })
     
     
  }

  

  
  gotoescription(item){
    var oneItem = {
      size : item.payload.doc.data().size, 
      gsm: item.payload.doc.data().gsm, 
      quality: item.payload.doc.data().quality, 
      mills: item.payload.doc.data().mills, 
      reemwt: item.payload.doc.data().reemwt, 
      reemqty: item.payload.doc.data().reemqty,
      bundleqty: item.payload.doc.data().bundleqty,
      wght: item.payload.doc.data().wght
    }
    this.das.initiaItem(oneItem);
    this.rtr.navigate(['/showDesAll']);
    
  }

}
