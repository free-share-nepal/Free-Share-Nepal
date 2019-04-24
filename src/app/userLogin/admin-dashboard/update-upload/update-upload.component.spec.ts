import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUploadComponent } from './update-upload.component';

describe('UpdateUploadComponent', () => {
  let component: UpdateUploadComponent;
  let fixture: ComponentFixture<UpdateUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
