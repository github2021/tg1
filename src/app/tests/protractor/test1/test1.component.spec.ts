import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtractorTest1Component } from './test1.component';

describe('Test1Component', () => {
  let component: ProtractorTest1Component;
  let fixture: ComponentFixture < ProtractorTest1Component > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ProtractorTest1Component]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtractorTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
