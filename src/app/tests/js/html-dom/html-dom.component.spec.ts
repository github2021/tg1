import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDomComponent } from './html-dom.component';

describe('HtmlDomComponent', () => {
  let component: HtmlDomComponent;
  let fixture: ComponentFixture<HtmlDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
