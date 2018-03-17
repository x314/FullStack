import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDepaComponent } from './edicion-depa.component';

describe('EdicionDepaComponent', () => {
  let component: EdicionDepaComponent;
  let fixture: ComponentFixture<EdicionDepaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionDepaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
