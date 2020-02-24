import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaEventComponent } from './india-event.component';

describe('IndiaEventComponent', () => {
  let component: IndiaEventComponent;
  let fixture: ComponentFixture<IndiaEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
