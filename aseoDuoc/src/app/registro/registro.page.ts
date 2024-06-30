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
    
    /* this.api.getRegistroUsuario(this.datos.id).subscribe((data: any) => {
      this.registros = data.map((registro: any) => {
        return {
          ...registro,
          fecha_entrada: this.formatDate(registro.fecha_entrada),
          fecha_salida: this.formatDate(registro.fecha_salida)
        };
      });
      console.log(this.registros);
    });
 */
    this.api.getRegistroUsuarioCard(this.datos.id).subscribe((data: any) => {
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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
    const day = ('0' + date.getUTCDate()).slice(-2);
    const hours = ('0' + date.getUTCHours()).slice(-2);
    const minutes = ('0' + date.getUTCMinutes()).slice(-2);
    
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }
  
  
}
