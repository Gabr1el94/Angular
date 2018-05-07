import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-notfound',
  viewProviders:[Title],
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(title: Title) { 
    title.setTitle("Error 404");
  }

  ngOnInit() {
  }

}
