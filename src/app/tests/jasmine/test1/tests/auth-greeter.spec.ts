import {ComponentFixture, TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';



import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() { }

  get username() {
    return "Spiderman";
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'auth-greeter',   // <auth-greeter></auth-greeter>
  template: `<h1>Hello {{name}}!</h1>`,
  providers: [ AuthService ]
})
export class AuthGreeter implements OnInit { 
  @Input() name;
  constructor(public auth: AuthService) { }
  
  ngOnInit() {
    if (!this.name) {
      this.name = this.auth.username;
    }
  } 
}




/* 
  Usage:     <auth-greeter></auth-greeter> 
  Renders:   <h1>Hello Spiderman!</h1>
*/
describe('Component: AuthGreeter', () => {
  let fixture, greeter, element, de, auth, auth2;
  
  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthGreeter ],
      providers: [ AuthService ]
    });

    fixture = TestBed.createComponent(AuthGreeter);
    greeter = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;

    auth = TestBed.get(AuthService); 
    auth2 = de.injector.get(AuthService);
  });
  
  //specs
  it('instances should be different', () => {
    expect(auth).not.toBe(auth2);
  });

  it('should render `Hello Spiderman!` (async)', async(() => {
    //trigger change detection
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(element.querySelector('h1').innerText).toBe('Hello Spiderman!');
    });
  }));
}) 