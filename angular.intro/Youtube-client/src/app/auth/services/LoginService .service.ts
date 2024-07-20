import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ilogin } from '../../shared/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) {}

  async onLogin(userObj: Ilogin): Promise<void> {
    let localArray: Ilogin[] = [];
    const isLocalData = localStorage.getItem("loginP");

    if (isLocalData) {
      localArray = JSON.parse(isLocalData);
    }

    userObj.isLogged = true;
    localArray.push(userObj);
    localStorage.setItem("loginP", JSON.stringify(localArray));

    await this.router.navigateByUrl('main');
  }

  async logout(): Promise<void> {
    localStorage.removeItem("loginP");

    await this.router.navigateByUrl('login');
  }
}
