import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
