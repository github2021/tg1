import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionTestingComponent } from './user-permission-testing.component';

describe('UserPermissionTestingComponent', () => {
  let component: UserPermissionTestingComponent;
  let fixture: ComponentFixture<UserPermissionTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPermissionTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPermissionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
