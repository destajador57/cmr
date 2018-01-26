import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MensajeComponent } from './mensaje.component';
import { RegistroComponent } from './registro.component';
import { LoginComponent } from './login.component';
import { UsuarioComponent } from './usuario.component';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CargaComponent } from './carga/carga.component';

const routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'carga', component: CargaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    RegistroComponent,
    LoginComponent,
    UsuarioComponent,
    SidebarComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
