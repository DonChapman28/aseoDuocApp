import { Component, OnInit } from '@angular/core';
import { NavigationserviceService } from '../appservices/navigationservice.service';
import { ApiServiceService } from '../appservices/api-service.service';
import { DatosserviceService } from '../appservices/datosservice.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registros: any = [];

  constructor(private navegacionService: NavigationserviceService,
              private api: ApiServiceService,
              private datos: DatosserviceService
  ) { }

  ngOnInit() {
    
      this.api.getRegistroUsuario(this.datos.id).subscribe((data: any) => {
        this.registros = data.map((registro: any) => {
          return {
            ...registro,
            fecha_entrada: this.formatDate(registro.fecha_entrada),
            fecha_salida: this.formatDate(registro.fecha_salida)
          };
        });
        console.log(this.registros);
      });
    
  }

  irHome() {
    this.navegacionService.navegarHome();
  }

formatDate(isoString: string): string {
    const date = new Date(isoString);
  
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  
}
