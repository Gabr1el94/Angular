import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2/index';
import {AuthService} from './auth.service';
import {GuardService} from './guard.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    AboutComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [AuthService,GuardService],
  bootstrap: [AppComponent]
})



export class AppModule { }
