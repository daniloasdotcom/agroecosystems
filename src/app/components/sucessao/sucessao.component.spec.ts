import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessaoComponent } from './sucessao.component';

describe('SucessaoComponent', () => {
  let component: SucessaoComponent;
  let fixture: ComponentFixture<SucessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
