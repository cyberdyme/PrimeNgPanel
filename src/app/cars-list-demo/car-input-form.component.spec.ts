import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInputFormComponent } from './car-input-form.component';

describe('CarInputFormComponent', () => {
  let component: CarInputFormComponent;
  let fixture: ComponentFixture<CarInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
