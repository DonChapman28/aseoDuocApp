import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    ViewChild,
  } from '@angular/core';

  import { ModalController } from '@ionic/angular';
  import { PhotoService } from './photo.service';

  @Component({
    selector: 'PhotoModalComponent',
    template: `
    <ion-content>
    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button (click)="addPhotoToGallery()">
        <ion-icon name="camera"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <ion-grid>
    <ion-row>
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>
  </ion-content>
    `,
    styles: [
      `
      `,
    ],
  })
  export class PhotoModalComponent implements OnInit, AfterViewInit, OnDestroy {
  

    constructor(
        private modalController: ModalController,
        public photoService: PhotoService,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        // Lógica de inicialización
    }

    ngAfterViewInit() {
        // Lógica después de que la vista se ha inicializado
    }

    ngOnDestroy() {
        // Lógica de limpieza cuando el componente se destruya
    }

    closeModal() {
        this.modalController.dismiss();
    }

    toggleTorch() {
        // Lógica para alternar la linterna
    }

    get isTorchAvailable() {
        // Lógica para determinar si la linterna está disponible
        return true; // o la condición real
    }

    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
}
