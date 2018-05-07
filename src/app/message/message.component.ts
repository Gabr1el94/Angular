import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-message',
  viewProviders:[Title],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Turismo City - Contact');
   }

  ngOnInit() {
  }

}
