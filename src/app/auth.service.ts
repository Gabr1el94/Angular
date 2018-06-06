import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isLog;
  public user;

  constructor() {
    this.isLog = false;
   }

   setUserLog(){
     this.isLog=true;
     this.user = 'Administrator';
   }

   getUserLog(){
     return this.isLog;
   }
}
