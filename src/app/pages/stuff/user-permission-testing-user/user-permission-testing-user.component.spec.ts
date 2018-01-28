import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionTestingUserComponent } from './user-permission-testing-user.component';

describe('UserPermissionTestingUserComponent', () => {
  let component: UserPermissionTestingUserComponent;
  let fixture: ComponentFixture<UserPermissionTestingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPermissionTestingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPermissionTestingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
