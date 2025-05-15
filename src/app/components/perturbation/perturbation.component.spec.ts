import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerturbationComponent } from './perturbation.component';

describe('PerturbationComponent', () => {
  let component: PerturbationComponent;
  let fixture: ComponentFixture<PerturbationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerturbationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerturbationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
