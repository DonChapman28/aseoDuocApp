import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ApiServiceService } from '../appservices/api-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  dataLogin : any;

  constructor(private alertController:AlertController,
    private router: Router,
    private toastController: ToastController,
    private api: ApiServiceService) { }

async loginvalidation(rut:any,password:any){
  const largoRut = rut.length;
  const largoPassword = password.length;
  console.log(largoRut, largoPassword);

  if (largoRut === 0){
    const toast = await this.toastController.create({
      message:"no puede estar vacio el rut",
      buttons:["Cerrar"],
      color:'secondary',
      duration: 1000
    });
    await toast.present()
  }
  else if (largoPassword === 0){
    const toast = await this.toastController.create({
      message:"no puede estar vacio la contraseña",
      buttons:["Cerrar"],
      color:'secondary',
      duration: 1000
    });
    await toast.present()
  }
 
  else 
      if (largoRut > 10 || largoRut < 7){
        const toast = await this.toastController.create({
        message:"rut invalido",
        buttons:["Cerrar"],
        color:'secondary',
        duration: 1000
        });
        await toast.present()
        }

      else if (largoPassword < 12 || largoPassword > 13){
        const toast = await this.toastController.create({
        message:"no puede el contraseña mas larga de 12 caracteres",
        buttons:["Cerrar"],
        color:'secondary',
        duration: 1000
        });
        await toast.present()
        }
      else
  
        this.api.appLogin(rut,password).subscribe((data: any) => {
        
          console.log(data);
          this.dataLogin = data; 
        });

        return this.dataLogin;
}

}

