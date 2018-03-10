import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionLocalComponent } from './edicion-local.component';

describe('EdicionLocalComponent', () => {
  let component: EdicionLocalComponent;
  let fixture: ComponentFixture<EdicionLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
