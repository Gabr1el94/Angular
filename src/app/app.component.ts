import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  viewProviders: [Title],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router,title: Title) {
    title.setTitle('Turismo City');
   }

   
}
