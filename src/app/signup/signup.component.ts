import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private viewportscroller : ViewportScroller) { }

  ngOnInit(): void {
  }
  onClick(id : string){
    this.viewportscroller.scrollToAnchor(id);
  }
}
