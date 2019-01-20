import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListDemoComponent } from './cars-list-demo.component';

describe('CarsListDemoComponent', () => {
  let component: CarsListDemoComponent;
  let fixture: ComponentFixture<CarsListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
