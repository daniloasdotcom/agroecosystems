import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuoComponent } from './individuo.component';

describe('IndividuoComponent', () => {
  let component: IndividuoComponent;
  let fixture: ComponentFixture<IndividuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividuoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
