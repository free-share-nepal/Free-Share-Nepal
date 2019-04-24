import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { freeshareDashboardComponent } from './freeshareDashboard.component';

describe('freeshareDashboardComponent', () => {
  let component: freeshareDashboardComponent;
  let fixture: ComponentFixture<freeshareDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ freeshareDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(freeshareDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
