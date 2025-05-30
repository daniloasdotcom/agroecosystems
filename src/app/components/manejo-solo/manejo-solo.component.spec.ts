import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoSoloComponent } from './manejo-solo.component';

describe('ManejoSoloComponent', () => {
  let component: ManejoSoloComponent;
  let fixture: ComponentFixture<ManejoSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManejoSoloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManejoSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
