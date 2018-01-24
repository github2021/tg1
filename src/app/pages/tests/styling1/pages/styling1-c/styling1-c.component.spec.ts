import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Styling1CComponent } from './styling1-c.component';

describe('Styling1CComponent', () => {
  let component: Styling1CComponent;
  let fixture: ComponentFixture < Styling1CComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Styling1CComponent],
        imports: [MatIconModule, MatSidenavModule, RouterTestingModule, BrowserAnimationsModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Styling1CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
