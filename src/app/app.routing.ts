import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HotelariaComponent } from "./hotelaria/hotelaria.component";
import { TuristicoComponent } from "./turistico/turistico.component";


const APP_ROUTES: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full' },
	{path: 'login', component: LoginComponent},
	{path:'contact',component: MessageComponent},
	{path: 'about', component: AboutComponent},
	{path:'dashboard', component:DashboardComponent, children:[ 
		{ path:'hotelaria',component: HotelariaComponent},
		{ path:'turistico',component: TuristicoComponent},
    ]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);