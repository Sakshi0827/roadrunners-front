import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaEventDetailComponent } from './india-event-detail.component';

describe('IndiaEventDetailComponent', () => {
  let component: IndiaEventDetailComponent;
  let fixture: ComponentFixture<IndiaEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaEventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
