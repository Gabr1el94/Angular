import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  viewProviders: [Title],  
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = 'anony';

  constructor(private router:Router,title: Title,private receive:AuthService) {
      title.setTitle('Turismo City - ADM');
   }

  ngOnInit() {
    this.name = this.receive.user;
    console.log("Usuário está logado?",this.receive.getUserLog());
  }

  isValid(): boolean {
    if ((this.name != null)) {
              return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }

}
