import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        console.log('invoca los usuarios');
        this.apiService.getUsuarios();
    }
}
