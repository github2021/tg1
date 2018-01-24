import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppService } from '../../../app.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture < TestingComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TestingComponent],
        imports: [FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
        providers: [AppService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
