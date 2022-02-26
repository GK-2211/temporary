import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private viewportscroller : ViewportScroller) { }


  ngOnInit(): void {
  }
  onClick(id : string){
    this.viewportscroller.scrollToAnchor(id);
  }
}
