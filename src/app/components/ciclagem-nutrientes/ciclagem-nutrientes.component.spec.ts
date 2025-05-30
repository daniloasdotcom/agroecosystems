import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclagemNutrientesComponent } from './ciclagem-nutrientes.component';

describe('CiclagemNutrientesComponent', () => {
  let component: CiclagemNutrientesComponent;
  let fixture: ComponentFixture<CiclagemNutrientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiclagemNutrientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiclagemNutrientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
