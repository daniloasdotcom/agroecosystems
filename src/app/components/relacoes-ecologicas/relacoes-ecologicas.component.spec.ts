import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacoesEcologicasComponent } from './relacoes-ecologicas.component';

describe('RelacoesEcologicasComponent', () => {
  let component: RelacoesEcologicasComponent;
  let fixture: ComponentFixture<RelacoesEcologicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacoesEcologicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelacoesEcologicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
