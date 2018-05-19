import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {AuthService} from '../auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  viewProviders: [Title],  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
 
  constructor(private router:Router,title: Title, private service: AuthService) {
      title.setTitle('Turismo City');  
   }

  ngOnInit() {
    
  }

  isLoggedIn(): boolean {
     if (this.service.getUserLog()) {
       return true;
     }
     return false;
  }



  



  
}
