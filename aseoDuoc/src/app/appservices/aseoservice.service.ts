import { Injectable } from '@angular/core';
import { DatosserviceService } from './datosservice.service';
import { ApiServiceService } from './api-service.service';
import { FechaserviceService } from './fechaservice.service';
@Injectable({
  providedIn: 'root'
})
export class AseoserviceService {

  constructor(private datos:DatosserviceService,
              private api:ApiServiceService,
              private fecha: FechaserviceService
  ) { }


scanSalida(data : any){
  
/* const data = {
'id_emp: ': this.datos.id,
'id_esp: ': this.datos.espacio,
'salida: ': this.datos.fechaSalida,
'entrada: ': this.datos.fechaEntrada} */

this.api.postRegistro(data).subscribe(
  response => {
    console.log(response); // Puedes manejar la respuesta aquí
  },
  error => {
    console.error(error); // Puedes manejar el error aquí
  }
);
}

}
