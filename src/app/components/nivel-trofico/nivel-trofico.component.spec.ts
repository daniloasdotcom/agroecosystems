import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelTroficoComponent } from './nivel-trofico.component';

describe('NivelTroficoComponent', () => {
  let component: NivelTroficoComponent;
  let fixture: ComponentFixture<NivelTroficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelTroficoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NivelTroficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
