import { Component, OnInit } from '@angular/core';
import { FechaserviceService } from '../appservices/fechaservice.service';
import { ApiServiceService } from '../appservices/api-service.service';
import { NavigationserviceService } from '../appservices/navigationservice.service';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  horarios: any = [];
  

  constructor(private api: ApiServiceService,
              private fecha: FechaserviceService,
              private navegacionService: NavigationserviceService 
  ) {}

  ngOnInit() {

      
    this.api.getHorarioUsuario(this.fecha.getDiaEsp()).subscribe((registroData: any) => {
      this.horarios = registroData.map((hora: any) =>{
        return{
          ...hora,
          estado: this.disponible(hora.hora_entrada, hora.hora_salida),
        };
      });
      console.log(this.horarios);

  });
};

irHome() {
  this.navegacionService.navegarHome();
}

disponible(hora_entrada: any, hora_salida: any){
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];

  const entrada = new Date(`${currentDate}T${hora_entrada}`);
  const salida = new Date(`${currentDate}T${hora_salida}`);

  const disponible = now >= entrada && now <= salida;
  
  console.log('es disponible? = ' + disponible)
  return now >= entrada && now <= salida;
  
}

}
