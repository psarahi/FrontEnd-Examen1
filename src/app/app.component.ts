import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './calculadora.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  operacion: any;
  historial: any[] = [];
  constructor(private apiService: CalculadoraService) { }

  ngOnInit() {
    this.operacion = '';

    this.apiService.getAllHistorial().subscribe(
      (data: any[]) => {
        this.historial = data;

      }
    );
  }

  valor(key: any) {

    this.operacion = this.operacion + key;


  }

  clearAll() {
    this.operacion = '';
  }

  clear() {
    this.operacion = this.operacion.substring(0, this.operacion.length - 1);
  }

  calculate() {

    this.apiService.calculate(this.operacion.toString()).toPromise().then(
      (data: any) => {
        console.log(data);

        this.operacion = data.resultado;

        this.historial.push(data);

      }
    );
  }


}
