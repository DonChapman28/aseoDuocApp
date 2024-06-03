import { Component, OnInit } from '@angular/core';
import { DatosserviceService } from '../appservices/datosservice.service';
import { ModalController, Platform } from '@ionic/angular';
import { AseoserviceService } from '../appservices/aseoservice.service';
import { PhotoModalComponent } from '../photoService/photo-modal-component';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.page.html',
  styleUrls: ['./observaciones.page.scss'],
})
export class ObservacionesPage implements OnInit {

tipo :number = 0;
descripcion : any;
enlace: any = "";
  constructor(private platform: Platform,
    private modalController: ModalController,
    private datos: DatosserviceService,
    private aseo: AseoserviceService) { }
    
  ngOnInit() {
  }

  async foto() {
    const modal = await this.modalController.create({
      component: PhotoModalComponent
    });
    return await modal.present();
  }
  

  enviar(){
    this.datos.datosRegistro = {
      'empleado_id_emp':this.datos.id, 
      'espacio_id_esp':this.datos.espacio,  
      'fecha_entrada':this.datos.fechaEntrada,
      'fecha_salida':this.datos.fechaSalida, 
      'tipo':this.tipo, 
      'descripcion':this.descripcion,
      'enlace':this.enlace 
    }
    console.log(this.datos.datosRegistro);
    this.aseo.scanSalidaObs(this.datos.datosRegistro);
   
  }
  
  enviar2(){
    this.datos.datosRegistro = {
      'empleado_id_emp':this.datos.id, 
      'espacio_id_esp':this.datos.espacio,  
      'fecha_entrada':this.datos.fechaEntrada,
      'fecha_salida':this.datos.fechaSalida, 
    }
    console.log(this.datos.datosRegistro);
    this.aseo.scanSalida(this.datos.datosRegistro);
   
  }

  
}
