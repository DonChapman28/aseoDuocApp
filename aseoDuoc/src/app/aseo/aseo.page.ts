import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from '../appservices/barcode-scanning-modal.component';
import { LensFacing,BarcodeScanner} from '@capacitor-mlkit/barcode-scanning';
import { FechaserviceService } from '../appservices/fechaservice.service';
import { DatosserviceService } from '../appservices/datosservice.service';
import { AseoserviceService } from '../appservices/aseoservice.service';
@Component({
  selector: 'app-aseo',
  templateUrl: './aseo.page.html',
  styleUrls: ['./aseo.page.scss'],
})
export class AseoPage implements OnInit {
  scanResult= '';
  constructor(private platform: Platform,
    private modalController: ModalController,
    private fecha: FechaserviceService,
    private datos: DatosserviceService,
    private aseo: AseoserviceService
    
  ) { }

  ngOnInit() : void {
    if(this.platform.is('capacitor')){
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
    }}

    async startScan(){
    
      const modal = await this.modalController.create({
        component: BarcodeScanningModalComponent,
        cssClass : 'barcode-scanning-modal',
        showBackdrop: false,
        componentProps: { 
          formats : [],
          LensFacing: LensFacing.Back
         }
        });
      
        await modal.present();
    
        const {data} = await modal.onWillDismiss();
        if(data){
          this.scanResult = data?.barcode?.displayValue;
          console.log(this.scanResult);
          this.datos.fechaEntrada = this.fecha.getFechaHora();
          this.datos.espacio = this.scanResult;
         

        }};
  
    async startScanSalida(){
    
      const modal = await this.modalController.create({
        component: BarcodeScanningModalComponent,
        cssClass : 'barcode-scanning-modal',
        showBackdrop: false,
        componentProps: { 
          formats : [],
          LensFacing: LensFacing.Back
         }
        });
      
        await modal.present();
    
        const {data} = await modal.onWillDismiss();
        if(data){
          this.scanResult = data?.barcode?.displayValue;
          console.log(this.scanResult);
          this.datos.fechaSalida = this.fecha.getFechaHora();

        }};
  
}
