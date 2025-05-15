import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodiversidadeComponent } from './biodiversidade.component';

describe('BiodiversidadeComponent', () => {
  let component: BiodiversidadeComponent;
  let fixture: ComponentFixture<BiodiversidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiodiversidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiodiversidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
