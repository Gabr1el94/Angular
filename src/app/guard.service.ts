import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class GuardService implements CanActivate{

  constructor(private user: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.router.navigate(['/']);
    console.log('Você não está autenticado!');
    return this.user.getUserLog();
  }
  
}
