import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  viewProviders: [Title],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(title: Title, private router:Router, private user:AuthService) {
    title.setTitle('Turismo City - Login');
   }

  ngOnInit() {
    console.log('iniciando...');
  }
  
  loginUser(e){
    e.preventDefault();
    console.log(e);
    var users = e.target.elements[0].value;
    var pass = e.target.elements[1].value;

    if (users == 'admin' && pass == 'admin') {
      this.user.setUserLog();
      this.router.navigate(['dashboard']);
    }else{
      window.alert("Login ou senha inválido!");
      e.target.elements[1].value="";
      e.target.elements[0].value="";
      this.router.navigate(['login']);
    }
  }

}
