import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  // Vamos a crear una serie de variables de diferentes tipos
  // Numérico
  iva = 16;        // Variable tipo entero
  total = 234.65;  // Variable tipo decimal

  // Cadenas de texto, tambien se les dicen String
  mensaje = 'Bienvenid@ a She Codes Angular';
  nombreCompleto = 'Alejandra Giraldo';

  // Arrays - Arreglos
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  diaSeleccionado = this.dias[0];    // diaSeleccionado = 'Lunes'

  // Object - Objetos
  personalInfo = {'nombre': 'Alejandra', 'apellido': 'Giraldo', 'cedula': 123456};
  soloApellido = this.personalInfo.apellido;    // soloApellido = 'Giraldo'

  // Boolean - Booleanos
  estoyAprendiendo = true;
  meGustanLosVegetales = false;

  variable = '';

guardemosUnValorEnUnaVariable(valor) {
  this.variable = valor;
}
mostrarMensajeEnVariable = true;

ngOnInit() {
  this.queMensajeMostrar();
}

queMensajeMostrar() {
  if (this.mostrarMensajeEnVariable == true) {
    this.guardemosUnValorEnUnaVariable(
      "El valor de la condición es igual a true 👍"
    );
  } else {
    this.guardemosUnValorEnUnaVariable(
      "El valor de la condición es diferente a true!, 👎"
    );
  }
}
}

