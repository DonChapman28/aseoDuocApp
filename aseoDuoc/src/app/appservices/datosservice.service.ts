import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosserviceService {
  public id: any;
  public fechaEntrada: any;
  public fechaSalida: any;
  public espacio: any;
  public tipo_observacion : any;
  public descripcion: any;
  public id_registro: number = 0;
  public datosRegistro: any = {};
  public datosObservacion: any = {};
  public datosUpdate: any = {};

  constructor() { }
}
