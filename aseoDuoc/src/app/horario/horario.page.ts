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
      this.horarios = registroData;
      console.log(registroData);

  });
};

irHome() {
  this.navegacionService.navegarHome();
}


}
