import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarLocalComponent } from './insertar-local.component';

describe('InsertarLocalComponent', () => {
  let component: InsertarLocalComponent;
  let fixture: ComponentFixture<InsertarLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
