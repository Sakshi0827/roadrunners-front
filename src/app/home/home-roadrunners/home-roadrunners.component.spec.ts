import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoadrunnersComponent } from './home-roadrunners.component';

describe('HomeRoadrunnersComponent', () => {
  let component: HomeRoadrunnersComponent;
  let fixture: ComponentFixture<HomeRoadrunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRoadrunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRoadrunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
