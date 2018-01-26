import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
    registroData = {};

    constructor(private authService: AuthService) {}

    registrar() {
        console.log(this.registroData);
        this.authService.registrarUsuario(this.registroData);
    }
}
