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
  idUser : any = {};
  rut1 :any = "";
  pass2 :any = "";
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
      try {
        const data: any = await this.api.appLogin(this.rut, this.password).toPromise();
        
        let userFound = false;

        for (const element of data) {
          // Acceder a cada propiedad del objeto individual
          this.rut1 = element.rut;
          this.pass2 = element.contra_emp;
          this.idUser = element.id_emp;

          if (this.rut1 === this.rut && this.pass2 === this.password) {
            userFound = true;
            const alert = await this.alert.create({
              message: "Inicio de sesión exitoso",
              buttons: ["Cerrar"],
            });
            await alert.present();
            this.router.navigate(['/home/' + this.idUser]);
            break;
          }
        }

        if (!userFound) {
          const alert = await this.alert.create({
            message: "Datos incorrectos",
            buttons: ["Cerrar"],
          });
          await alert.present();
        }
      } catch (error) {
       // Manejar error de la solicitud HTTP
       const alert = await this.alert.create({
        message: "error de conexion",
        buttons: ["Cerrar"],
      });
      await alert.present();
      }
    }
  }}}