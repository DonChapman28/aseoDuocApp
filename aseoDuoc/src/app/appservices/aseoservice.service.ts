import { Injectable } from '@angular/core';
import { DatosserviceService } from './datosservice.service';
import { ApiServiceService } from './api-service.service';
import { FechaserviceService } from './fechaservice.service';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AseoserviceService {

  constructor(private datos:DatosserviceService,
              private api:ApiServiceService,
              private fecha: FechaserviceService,
              private alert: AlertController
  ) { }


scanSalida(data : any){
  
/* const data = {
'id_emp: ': this.datos.id,
'id_esp: ': this.datos.espacio,
'salida: ': this.datos.fechaSalida,
'entrada: ': this.datos.fechaEntrada} */

this.api.postRegistro(data).subscribe(
  async response => {
    const alert = await this.alert.create({
      message: "registro exitoso :)",
      buttons: ["Cerrar"],
    });
    await alert.present();
    console.log(response); // Puedes manejar la respuesta aquí
  },
  async error => {
    const alert = await this.alert.create({
      message: "error de registro :(",
      buttons: ["Cerrar"],
    });
    await alert.present();
    console.log(error); // Puedes manejar el error aquí
  }
);
}

scanSalidaObs(data : any){
  
/* const data = {
'id_emp: ': this.datos.id,
'id_esp: ': this.datos.espacio,
'salida: ': this.datos.fechaSalida,
'entrada: ': this.datos.fechaEntrada} */

this.api.postRegistroObs(data).subscribe(
  async response => {
    const alert = await this.alert.create({
      message: "registro exitoso :)",
      buttons: ["Cerrar"],
    });
    await alert.present();
    console.log(response); // Puedes manejar la respuesta aquí
  },
  async error => {
    const alert = await this.alert.create({
      message: "error de registro :(",
      buttons: ["Cerrar"],
    });
    await alert.present();
    console.log(error); // Puedes manejar el error aquí
  }
);
}

}
