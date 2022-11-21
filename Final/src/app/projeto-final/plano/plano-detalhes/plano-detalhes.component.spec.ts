import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDetalhesComponent } from './plano-detalhes.component';

describe('PlanoDetalhesComponent', () => {
  let component: PlanoDetalhesComponent;
  let fixture: ComponentFixture<PlanoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
