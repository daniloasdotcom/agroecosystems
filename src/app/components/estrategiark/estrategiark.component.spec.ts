import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiarkComponent } from './estrategiark.component';

describe('EstrategiarkComponent', () => {
  let component: EstrategiarkComponent;
  let fixture: ComponentFixture<EstrategiarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrategiarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstrategiarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
