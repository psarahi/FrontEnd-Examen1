import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  operacion: any;

  title = 'Examen1-FrontEnd';

  ngOnInit() {
    this.operacion = '';
  }

  valor(key: any) {
    // this.valorActual = key;
    this.operacion = this.operacion + key;
    //console.log(this.valorActual + '  ' + this.operacion.length);

  }

  clearAll() {
    this.operacion = ' ';
  }

  clear() {
    this.operacion = this.operacion.substring(0, this.operacion.length - 1);
  }
}
