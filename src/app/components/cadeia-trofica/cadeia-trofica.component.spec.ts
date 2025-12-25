import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeiaTroficaComponent } from './cadeia-trofica.component';

describe('CadeiaTroficaComponent', () => {
  let component: CadeiaTroficaComponent;
  let fixture: ComponentFixture<CadeiaTroficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadeiaTroficaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadeiaTroficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
