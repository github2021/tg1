import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Styling1footerComponent } from '../../shared/styling1footer/styling1footer.component';

import { Styling1Component } from './styling1.component';

describe('Styling1Component', () => {
  let component: Styling1Component;
  let fixture: ComponentFixture < Styling1Component > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Styling1Component, Styling1footerComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Styling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
