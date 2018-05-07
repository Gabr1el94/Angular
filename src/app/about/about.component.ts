import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
@Component({
  selector: 'app-about',
  viewProviders: [Title],  
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(title: Title) { 
    title.setTitle('Turismo City - About');
  }

  ngOnInit() {
  }

}
