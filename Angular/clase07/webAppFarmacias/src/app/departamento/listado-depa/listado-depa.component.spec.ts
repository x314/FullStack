import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDepaComponent } from './listado-depa.component';

describe('ListadoDepaComponent', () => {
  let component: ListadoDepaComponent;
  let fixture: ComponentFixture<ListadoDepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
