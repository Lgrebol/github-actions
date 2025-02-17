import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultat: number | string = 0;

  suma() {
    this.resultat = this.num1 + this.num2;
  }

  resta() {
    this.resultat = this.num1 - this.num2;
  }

  multiplicacio() {
    this.resultat = this.num1 * this.num2;
  }

  divisio() {
    if (this.num2 !== 0) {
      this.resultat = this.num1 / this.num2;
    } else {
      this.resultat = 'Error: Divisió per 0';
    }
  }
}
