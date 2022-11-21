import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoFormularioComponent } from './plano-formulario.component';

describe('PlanoFormularioComponent', () => {
  let component: PlanoFormularioComponent;
  let fixture: ComponentFixture<PlanoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
