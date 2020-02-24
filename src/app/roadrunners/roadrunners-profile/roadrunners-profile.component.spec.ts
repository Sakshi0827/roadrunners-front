import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadrunnersProfileComponent } from './roadrunners-profile.component';

describe('RoadrunnersProfileComponent', () => {
  let component: RoadrunnersProfileComponent;
  let fixture: ComponentFixture<RoadrunnersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadrunnersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadrunnersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
