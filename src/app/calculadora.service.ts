import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  apiUrl: string = environment.endpoint;
  constructor(private http: HttpClient) { }

  calculate(_expresion) {
    return this.http.post(this.apiUrl + 'calculadora', { expresion: _expresion });
  }

  getAllHistorial() {
    return this.http.get(this.apiUrl + 'historial');
  }

}
