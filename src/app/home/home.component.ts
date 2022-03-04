import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private viewportscroller : ViewportScroller) { }

  ngOnInit(): void {
    setTimeout(() => {
      
    },2000 );
  }
  onClick(id : string){
    this.viewportscroller.scrollToAnchor(id);
  }
}
