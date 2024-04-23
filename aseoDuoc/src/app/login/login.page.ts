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
    const lenghtPassword = this.password.length;
    console.log(largoRut, lenghtPassword);

    if (largoRut === 0){
      const toast = await this.toastController.create({
        message:"mala tu wea",
        buttons:["Cerrar"],
        color:'secondary',
        duration: 1000
      });
      await toast.present()
    }

  
}
}