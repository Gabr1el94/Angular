import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  viewProviders: [Title],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle('Turismo City');
   }
}
