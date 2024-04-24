import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  rut : any = "";
  password : any ="";
  
  constructor(private alertController:AlertController,
    private router: Router,
    private toastController: ToastController,
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
    if (largoPassword === 0){
      const toast = await this.toastController.create({
        message:"no puede estar vacio la contraseña",
        buttons:["Cerrar"],
        color:'secondary',
        duration: 1000
      });
      await toast.present()
    }
    else if (largoRut < 10 && largoRut > 13){
      const toast = await this.toastController.create({
        message:"contraseña, maximo 12 y minimo 11 caracteres",
        buttons:["Cerrar"],
        color:'secondary',
        duration: 1000
      });
    }
}
}