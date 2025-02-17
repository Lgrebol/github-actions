import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Com que CalculadoraComponent és standalone, l'importem aquí
      imports: [CalculadoraComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should sum two numbers correctly', () => {
    component.num1 = 2;
    component.num2 = 3;
    component.suma(); // assegura't que el mètode s'anomena així
    expect(component.resultat).toEqual(5);
  });

  it('should subtract two numbers correctly', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.resta();
    expect(component.resultat).toEqual(2);
  });

  it('should multiply two numbers correctly', () => {
    component.num1 = 4;
    component.num2 = 3;
    component.multiplicacio(); // assegura't que el mètode s'anomena així
    expect(component.resultat).toEqual(12);
  });

  it('should divide two numbers correctly', () => {
    component.num1 = 10;
    component.num2 = 2;
    component.divisio();
    expect(component.resultat).toEqual(5);
  });

  it('should display error on division by zero', () => {
    component.num1 = 10;
    component.num2 = 0;
    component.divisio();
    expect(component.resultat).toEqual('Error: Divisió per 0');
  });
});
