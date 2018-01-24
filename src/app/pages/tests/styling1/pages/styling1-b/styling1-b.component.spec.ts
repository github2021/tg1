import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Styling1BComponent } from './styling1-b.component';

describe('Styling1BComponent', () => {
  let component: Styling1BComponent;
  let fixture: ComponentFixture < Styling1BComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Styling1BComponent],
        imports: [RouterTestingModule]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Styling1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
