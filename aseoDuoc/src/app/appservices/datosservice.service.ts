import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosserviceService {
  public id: any;
  public fechaEntrada: any;
  public fechaSalida: any;
  public espacio: any;
  public tipo : number = 0;
  public descripcion: any;

  public datosRegistro: any = {};

  constructor() { }
}
