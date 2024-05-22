import { Component, OnInit } from '@angular/core';
import { DatosserviceService } from '../appservices/datosservice.service';
@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.page.html',
  styleUrls: ['./observaciones.page.scss'],
})
export class ObservacionesPage implements OnInit {

tipo : any;
descripcion : any;
  constructor(private datos: DatosserviceService) { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.tipo);
    console.log(this.descripcion);
  }

  
}
