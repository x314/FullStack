import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDepartamentoComponent } from './listado-departamento.component';

describe('ListadoDepartamentoComponent', () => {
  let component: ListadoDepartamentoComponent;
  let fixture: ComponentFixture<ListadoDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
