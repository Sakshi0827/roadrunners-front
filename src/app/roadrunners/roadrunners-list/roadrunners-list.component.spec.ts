import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadrunnersListComponent } from './roadrunners-list.component';

describe('RoadrunnersListComponent', () => {
  let component: RoadrunnersListComponent;
  let fixture: ComponentFixture<RoadrunnersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadrunnersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadrunnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
