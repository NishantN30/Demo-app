import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGuardService implements CanActivate{

  canActivate() {
    return true;
  }
  constructor() { }

}
