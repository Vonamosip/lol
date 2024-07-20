import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { FormsModule } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/LoginService .service';
import { Ilogin } from '../../../shared/interfaces/login.interface';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userObj: Ilogin = {
    login: '',
    password: '',
    isLogged: false
  };

  constructor(private loginService: LoginService) {}

  async onLogin(): Promise<void> {
    await this.loginService.onLogin(this.userObj);
  }
}
