import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NichoComponent } from './nicho.component';

describe('NichoComponent', () => {
  let component: NichoComponent;
  let fixture: ComponentFixture<NichoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NichoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NichoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
