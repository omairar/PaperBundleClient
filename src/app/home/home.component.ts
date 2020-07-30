import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private rtr: Router, private ac: ActivatedRoute) { }

  size:string;
  
  width : string;
  height : string;

  ipCheck : string = null;

  ngOnInit(): void {
    this.width = null;
    this.height= null;
  }

  searchSize(){
    
    if(this.width == null && this.height == null){
      this.ipCheck = "enter some thing"
    }
    else if(this.width == null && this.height != null ){
      this.ipCheck = "enter width";
      this.height = null;
    }
    else if(this.width != null && this.height == null ){
      this.ipCheck = "enter height"
      this.width= null;
    }
    else{
      console.log("helli")
      var siza = this.width+"x"+this.height;
      this.rtr.navigate(['/searchedResults/'+siza])
    }
    
  }

  displayAllSize(){
    this.size = "all";

    this.rtr.navigate(['/']) 
  }

}
