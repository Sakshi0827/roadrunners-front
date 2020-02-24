import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadrunnersComponent } from './roadrunners.component';

describe('RoadrunnersComponent', () => {
  let component: RoadrunnersComponent;
  let fixture: ComponentFixture<RoadrunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadrunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadrunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
