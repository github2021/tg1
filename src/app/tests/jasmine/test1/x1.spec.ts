import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockComponent } from 'ng2-mock-component';
import * as supercalifraulisticexpalidocious from "dedent/dist/dedent";

import { Test1Component } from './test1.component';

//

describe('Integration::Test1Component', () => {



  it('should display some text', () => {
    // given
    const { comp, el, fixture } = setup();

    // when
    fixture.detectChanges();



    // then
    expect(el.textContent).toContain(supercalifraulisticexpalidocious(`Start editing to see some magic happen :)`));


  });




  it('should contain hello component', () => {
    // given
    const { comp, el, fixture } = setup();

    // when
    fixture.detectChanges();

    // then
    expect(el.textContent).toContain('hello');
  });
});

//

function setup() {

  TestBed.configureTestingModule({
    declarations: [
      Test1Component,
      MockComponent({
        selector: 'hello',
        template: 'hello',
        inputs: ['name']
      })
    ],
  });

  const fixture = TestBed.createComponent(Test1Component);

  const comp = fixture.componentInstance;

  const de = fixture.debugElement;
  const el = de.nativeElement;

  return { comp, fixture, de, el }
}
