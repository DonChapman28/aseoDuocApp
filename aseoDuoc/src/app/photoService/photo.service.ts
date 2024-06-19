import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { UserPhoto } from './user-photo';
import { ApiServiceService } from '../appservices/api-service.service';
import { DatosserviceService } from '../appservices/datosservice.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  constructor(private api : ApiServiceService,
              private datos: DatosserviceService,
              private alert: AlertController
  ) { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });

    const blob = await this.getBlobFromUri(capturedPhoto.webPath!);
    this.datos.foto = blob;

    console.log('wanolo esta aqui', this.datos.foto)
    
  }

  private async getBlobFromUri(uri: string): Promise<Blob> {
    const response = await fetch(uri);
    return await response.blob();
  }

  
 public uploadPhoto() {
    if (this.datos.foto) {
      const file = this.datos.foto;

      this.api.uploadImage(file).subscribe(
        async response => {
          console.log('Foto subida correctamente:', response.url);
          this.datos.enlace = response.url;
          console.log('enlace para bd: '+ this.datos.enlace);
          const alert = await this.alert.create({
            message: "Foto subida correctamente :)",
            buttons: ["Cerrar"],
          });
          await alert.present();
          
        },
        async error => {
          console.error('Error al subir la foto:', error);
          const alert = await this.alert.create({
            message: "error en la carga de foto :(",
            buttons: ["Cerrar"],
          });
          await alert.present();
        }
      );
    }
  }

}
