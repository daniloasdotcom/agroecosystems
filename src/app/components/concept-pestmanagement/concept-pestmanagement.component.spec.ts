import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptPestmanagementComponent } from './concept-pestmanagement.component';

describe('ConceptPestmanagementComponent', () => {
  let component: ConceptPestmanagementComponent;
  let fixture: ComponentFixture<ConceptPestmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptPestmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConceptPestmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
