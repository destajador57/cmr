import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
    loginData = {};

    constructor(private authService: AuthService) {}

    login() {
        console.log(this.loginData);
        this.authService.loginUsuario(this.loginData);
    }
}
