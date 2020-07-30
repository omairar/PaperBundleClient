import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'
import {FirebaseFilterService} from '../services/firebase-filter.service'
import {DescriptionFilteredService} from '../services/description-filtered.service'

@Component({
  selector: 'app-searched-results',
  templateUrl: './searched-results.component.html',
  styleUrls: ['./searched-results.component.css']
})
export class SearchedResultsComponent implements OnInit {

  items=[];

  

  constructor(private rtr: Router, 
    private fbfs: FirebaseFilterService,
    private dfs: DescriptionFilteredService,
    private ac: ActivatedRoute,
    private loc: Location) { 
    
  }

  
  

  ngOnInit(): void {
    this.items=[];
    
    var size = this.ac.snapshot.params['size'];
    
    
    this.ac.params
    .subscribe(
    (params: Params) =>{
     size=params['size']
    }
    )

    console.log(size)

    this.fbfs.searchUsers(size)
    .subscribe(result => {
      this.items = result;
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
    this.dfs.initiaItem(oneItem);
    this.rtr.navigate(['/showDesFilter']);
    
  }


}
