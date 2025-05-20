import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoPrimariaComponent } from './producao-primaria.component';

describe('ProducaoPrimariaComponent', () => {
  let component: ProducaoPrimariaComponent;
  let fixture: ComponentFixture<ProducaoPrimariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducaoPrimariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducaoPrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
