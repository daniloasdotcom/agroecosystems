import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScutSaatComponent } from './scut-saat.component';

describe('ScutSaatComponent', () => {
  let component: ScutSaatComponent;
  let fixture: ComponentFixture<ScutSaatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScutSaatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScutSaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
