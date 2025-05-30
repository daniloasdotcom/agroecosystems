import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoAguaComponent } from './manejo-agua.component';

describe('ManejoAguaComponent', () => {
  let component: ManejoAguaComponent;
  let fixture: ComponentFixture<ManejoAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManejoAguaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManejoAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
