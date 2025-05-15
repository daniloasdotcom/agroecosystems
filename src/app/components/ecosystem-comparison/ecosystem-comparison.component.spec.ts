import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemComparisonComponent } from './ecosystem-comparison.component';

describe('EcosystemComparisonComponent', () => {
  let component: EcosystemComparisonComponent;
  let fixture: ComponentFixture<EcosystemComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemComparisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosystemComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
