import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
private urlAPI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  appLogin(rut: string, pass: string) {
    const url = `${this.urlAPI}/login?rut=${rut}&contra_emp=${pass}`; 
    return this.http.get(url);
}

}
