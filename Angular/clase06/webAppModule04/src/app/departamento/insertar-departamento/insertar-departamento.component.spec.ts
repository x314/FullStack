import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarDepartamentoComponent } from './insertar-departamento.component';

describe('InsertarDepartamentoComponent', () => {
  let component: InsertarDepartamentoComponent;
  let fixture: ComponentFixture<InsertarDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
