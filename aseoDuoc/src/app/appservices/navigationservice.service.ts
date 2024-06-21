import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationserviceService {

  constructor(private router:Router) { }
  
  navegarRegistro() {
    this.router.navigate(['/registro']);
  }

  navegarAseo() {
    this.router.navigate(['/aseo']);
  }

  navegarLogin() {
    this.router.navigate(['/login']);
  }
  navegarObservaciones() {
    this.router.navigate(['/observaciones']);
  }

  navegarHome() {
    this.router.navigate(['home/:id']);
  }
  
  navegarHorario() {
    this.router.navigate(['/horario']);
  }
}
