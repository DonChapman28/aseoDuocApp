import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ApiServiceService } from '../appservices/api-service.service';
import { LoginserviceService } from '../appservices/loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  rut : any = "";
  password : any ="";
  datos : any;
  constructor(private alert:AlertController,
    private router: Router,
    private toastController: ToastController,
    private api: ApiServiceService,
    private login: LoginserviceService
  ) { }
  
  ngOnInit() {
  }

  async validar() {
    
    const largoRut = this.rut.length;
    const largoPassword = this.password.length;
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
   
    else{
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
    else{
        this.api.appLogin(this.rut,this.password).subscribe((data: any) => {
      
        console.log(data);
        this.datos = data;
        });

      if(!this.datos) {
        const alert = await this.alert.create({
          message:"inicio de sesion exitoso",
          buttons:["Cerrar"],
          });
          await alert.present()
          this.router.navigate(['/home']);

      }
      else{
        const alert = await this.alert.create({
          message:"datos incorrectos",
          buttons:["Cerrar"],
          });
          await alert.present()
      }}}

  }

}