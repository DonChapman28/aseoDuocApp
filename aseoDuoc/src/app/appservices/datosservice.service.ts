import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosserviceService {
  public id: any;
  public fechaEntrada: any;
  public fechaSalida: any;
  public espacio: any;

  constructor() { }
}
