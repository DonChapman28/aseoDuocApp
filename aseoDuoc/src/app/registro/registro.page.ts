import { Component, OnInit } from '@angular/core';
import { NavigationserviceService } from '../appservices/navigationservice.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private navegacionService: NavigationserviceService) { }

  ngOnInit() {
  }
  irHome() {
    this.navegacionService.navegarHome();
  }
}
