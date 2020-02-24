import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaEventListComponent } from './india-event-list.component';

describe('IndiaEventListComponent', () => {
  let component: IndiaEventListComponent;
  let fixture: ComponentFixture<IndiaEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
