import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatIconModule } from '@angular/material';

import { Styling1DComponent } from './styling1-d.component';

describe('Styling1DComponent', () => {
  let component: Styling1DComponent;
  let fixture: ComponentFixture < Styling1DComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Styling1DComponent],
        imports: [MatSidenavModule, RouterTestingModule, MatIconModule, BrowserAnimationsModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Styling1DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
