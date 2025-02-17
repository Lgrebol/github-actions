import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  imports: [FormsModule]  // Important: afegeix FormsModule aquí!
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
