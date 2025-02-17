import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve sumar dos nombres correctament', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.suma();
    expect(component.resultat).toBe(8);
  });

  it('deve restar dos nombres correctament', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.resta();
    expect(component.resultat).toBe(2);
  });

  it('deve multiplicar dos nombres correctament', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.multiplicacio();
    expect(component.resultat).toBe(15);
  });

  it('deve dividir dos nombres correctament', () => {
    component.num1 = 6;
    component.num2 = 3;
    component.divisio();
    expect(component.resultat).toBe(2);
  });

  it('deve mostrar error en divisió per 0', () => {
    component.num1 = 6;
    component.num2 = 0;
    component.divisio();
    expect(component.resultat).toBe('Error: Divisió per 0');
  });
});
