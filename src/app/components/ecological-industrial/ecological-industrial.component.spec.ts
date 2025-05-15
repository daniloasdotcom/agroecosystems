import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologicalIndustrialComponent } from './ecological-industrial.component';

describe('EcologicalIndustrialComponent', () => {
  let component: EcologicalIndustrialComponent;
  let fixture: ComponentFixture<EcologicalIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcologicalIndustrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcologicalIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
