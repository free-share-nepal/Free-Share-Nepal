import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { userLoginComponent } from './userLogin.component';

describe('userLoginComponent', () => {
  let component: userLoginComponent;
  let fixture: ComponentFixture<userLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ userLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(userLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
