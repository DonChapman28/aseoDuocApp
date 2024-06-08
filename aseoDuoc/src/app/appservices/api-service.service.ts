import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
private urlAPI = 'https://apiapp-78xi.onrender.com';

  constructor(private http: HttpClient) { }

  appLogin(rut: string, pass: string) {
    const url = `${this.urlAPI}/login?rut=${rut}&contra_emp=${pass}`; 
    return this.http.get(url);
}

postRegistro(data : any) {
  const url = this.urlAPI + '/api/insertRegistro'; 
  return this.http.post(url, data);
}  

postRegistroObs(data : any) {
  const url = this.urlAPI + '/api/insertRegObs'; 
  return this.http.post(url, data);
}  


//nuevos endpoints
postInicioAseo(data:any): Observable<{id_registro: number}>{
  const url = this.urlAPI + '/api/inicioAseo';
  return this.http.post<{id_registro : number}>(url,data) 
}

postInsertObs(data:any){
  const url = this.urlAPI + '/api/insertObservacion';
  return this.http.post(url,data); 
}

putFinalizarAseo(data:any){
  const url = this.urlAPI + '/api/finalizarAseo';
  return this.http.put(url,data); 
}




}
