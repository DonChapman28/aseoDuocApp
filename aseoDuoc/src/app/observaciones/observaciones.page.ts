import { Component, OnInit } from '@angular/core';
import { DatosserviceService } from '../appservices/datosservice.service';
import { ModalController, Platform } from '@ionic/angular';
import { PhotoModalComponent } from '../photoService/photo-modal-component';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.page.html',
  styleUrls: ['./observaciones.page.scss'],
})
export class ObservacionesPage implements OnInit {

tipo : any;
descripcion : any;
  constructor(private platform: Platform,
    private modalController: ModalController,
    private datos: DatosserviceService) { }

  ngOnInit() {
  }

  async foto() {
    const modal = await this.modalController.create({
      component: PhotoModalComponent
    });
    return await modal.present();
  }
  

  enviar(){
    console.log(this.tipo);
    console.log(this.descripcion);
  }

  
}
