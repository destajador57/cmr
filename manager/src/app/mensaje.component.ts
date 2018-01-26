import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'mensaje',
  templateUrl: './mensaje.component.html'
})
export class MensajeComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMensajes();
  }
}
