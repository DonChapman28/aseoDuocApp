import { Component } from '@angular/core';
import { NavigationserviceService } from '../appservices/navigationservice.service';
import { DatosserviceService } from '../appservices/datosservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navegacionService: NavigationserviceService,
              private datos: DatosserviceService
  ) {}

  irRegistro() {
    this.navegacionService.navegarRegistro();
  }

  irAseo() {
    this.navegacionService.navegarAseo();
  }

  irLogin() {
    this.datos.id = 0;
    this.navegacionService.navegarLogin();
  }
}