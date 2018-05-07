import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-login',
  viewProviders: [Title],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Turismo City - Login');
   }

  ngOnInit() {
  }

}
