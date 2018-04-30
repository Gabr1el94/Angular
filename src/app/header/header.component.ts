import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullImagePath: string;
  constructor() { 
  	this.fullImagePath = '../assets/image/logo.png';
  }

  ngOnInit() {
  }

}