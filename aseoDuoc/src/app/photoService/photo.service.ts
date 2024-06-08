import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { UserPhoto } from './user-photo';
import { ApiServiceService } from '../appservices/api-service.service';
import { DatosserviceService } from '../appservices/datosservice.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  constructor(private api : ApiServiceService,
              private datos: DatosserviceService
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

    this.photos.unshift({
      filepath: "soon...", // Cambiar esto según la lógica de almacenamiento de archivos
      webviewPath: capturedPhoto.webPath!
    });
    console.log('wanolo esta aqui', this.datos.foto)
    
  }

  private async getBlobFromUri(uri: string): Promise<Blob> {
    const response = await fetch(uri);
    return await response.blob();
  }

  
 public async uploadPhoto() {
    if (this.datos.foto) {
      const file = new File([this.datos.foto], 'photo.jpg', { type: 'image/jpeg' });

      this.api.uploadImage(file).subscribe(
        (response) => {
          console.log('Foto subida correctamente:', response.enlace);
          this.datos.enlace = response.enlace;
          // Aquí puedes actualizar la interfaz de usuario o manejar la respuesta de alguna otra forma
        },
        (error) => {
          console.error('Error al subir la foto:', error);
        }
      );
    }
  }
}
