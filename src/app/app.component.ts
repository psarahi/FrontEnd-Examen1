import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from './calculadora.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  operacion: any;
  historial: any;
  constructor(private apiService: CalculadoraService) { }

  ngOnInit() {
    this.operacion = '';

    this.apiService.getAllHistorial().subscribe(
      data => {
        this.historial = data;
        console.log(this.historial);
      }
    );
  }

  valor(key: any) {
    // this.valorActual = key;
    this.operacion = this.operacion + key;
    //console.log(this.valorActual + '  ' + this.operacion.length);

  }

  clearAll() {
    this.operacion = '';
  }

  clear() {
    this.operacion = this.operacion.substring(0, this.operacion.length - 1);
  }

  calculate() {

    this.apiService.calculate(this.operacion.toString()).subscribe(
      data => {
        this.operacion = data;

        this.apiService.getAllHistorial().subscribe(
          data => {
            this.historial = data;
            console.log(this.historial);
          }
        );

      }
    );
  }
}
