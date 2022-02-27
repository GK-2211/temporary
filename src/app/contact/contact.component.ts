import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private viewportscroller : ViewportScroller) { }

  ngOnInit(): void {
  }
  onClick(id : string){
    this.viewportscroller.scrollToAnchor(id);
  }
}
