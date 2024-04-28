import { Component } from '@angular/core';
import { NavigationserviceService } from '../appservices/navigationservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navegacionService: NavigationserviceService) {}

  irRegistro() {
    this.navegacionService.navegarRegistro();
  }

  irAseo() {
    this.navegacionService.navegarAseo();
  }

  irLogin() {
    this.navegacionService.navegarLogin();
  }
}