import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechaserviceService {

  constructor() { }

  getFechaHora(){
    const fechaActual = new Date();
    
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; //los meses en js van de 0 a 11!
    const año = fechaActual.getFullYear();

    const fechaFormateada = `${año}-${('0' + mes).slice(-2)}-${('0' + dia).slice(-2)}`;
    const hora = ('0' + fechaActual.getHours()).slice(-2);
    const minutos = ('0' + fechaActual.getMinutes()).slice(-2);
   
    const horaFormateada = `${('0' + hora).slice(-2)}:${('0' + minutos).slice(-2)}`;
    const fechaHora = fechaFormateada +' '+ horaFormateada;
  
    return (fechaHora);
  }
  
  getFecha(){
    const fechaActual = new Date();
    //fecha completa para el registro
    return (fechaActual);
  }
  
  getFechaRegistro(){
    const fechaActual = new Date();
    
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1; //los meses en js van de 0 a 11!
    const año = fechaActual.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`;
    return(fechaFormateada);
  }


 getDiaEsp(){
  // Crear un objeto de fecha
let fecha = new Date();

// Obtener el día de la semana (0-6)
let diaSemana = fecha.getDay();

// Array con los nombres de los días en español
let semana = [
  "Domingo", 
  "Lunes", 
  "Martes", 
  "Miércoles", 
  "Jueves", 
  "Viernes", 
  "Sábado"
];

// Obtener el nombre del día en español
let diaEnEspanol = semana[diaSemana];

// Mostrar el resultado
console.log(diaEnEspanol);
return(diaEnEspanol);
}




}
