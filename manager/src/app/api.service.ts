import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    mensajes = [];
    usuarios = [];

    constructor(private http: Http) { }

    getMensajes() {
        this.http.get('http://localhost:3000/publicacion').subscribe(res => {
            console.log(res);
            this.mensajes = res.json();
            console.log(res.json());
        });
    }

    getUsuarios() {
        this.http.get('http://localhost:3000/usuarios').subscribe(res => {
            this.usuarios = res.json();
            console.log(res.json());
        });
    }

    upload(formData) {
        this.http.post('http://localhost:3000/upload', formData).subscribe(res => {
            console.log(res.json());
        });
    }
}
