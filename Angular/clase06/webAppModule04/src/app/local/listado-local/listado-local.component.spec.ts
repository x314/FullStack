import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLocalComponent } from './listado-local.component';

describe('ListadoLocalComponent', () => {
  let component: ListadoLocalComponent;
  let fixture: ComponentFixture<ListadoLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
