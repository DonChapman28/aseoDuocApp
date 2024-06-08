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


scanInicio(data : any){
  
/* const data = {
'id_emp: ': this.datos.id,
'id_esp: ': this.datos.espacio,
'salida: ': this.datos.fechaSalida,
'entrada: ': this.datos.fechaEntrada} */

this.api.postInicioAseo(data).subscribe(
  async response => {
    this.datos.id_registro = response.id_registro;
    const alert = await this.alert.create({
      message: "registro de inicio exitoso :)",
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

scanObs(data : any){
  
/* const data = {
'id_emp: ': this.datos.id,
'id_esp: ': this.datos.espacio,
'salida: ': this.datos.fechaSalida,
'entrada: ': this.datos.fechaEntrada} */

this.api.postInsertObs(data).subscribe(
  async response => {
    const alert = await this.alert.create({
      message: "registro de observacion exitoso :)",
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


scanFinalizar(data: any){
  this.api.putFinalizarAseo(data).subscribe(
    async response => {
      const alert = await this.alert.create({
        message: "registro de finalizacion exitoso :)",
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


/* this.api.postInsertObs(data).subscribe(
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
); */
}


