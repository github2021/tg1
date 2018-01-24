import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Styling1footerComponent } from './styling1footer.component';

describe('Styling1footerComponent', () => {
  let component: Styling1footerComponent;
  let fixture: ComponentFixture<Styling1footerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Styling1footerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Styling1footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
