import {ComponentFixture, TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {Component, Output, EventEmitter} from '@angular/core';


import {Directive, HostListener, 
  //Component, Output, EventEmitter
} from '@angular/core';

@Directive({
  selector: "[log-clicks]"
})
export class logClicks {
  counter = 0;
  @Output() changes = new EventEmitter();
  
  @HostListener('click', ['$event.target'])
  clicked(target) { 
    console.log(`Click on [${target}]: ${++this.counter}`);
    //we use emit as next is marked as deprecated
    this.changes.emit(this.counter);
  }
}


/* 
  Usage:     <div log-clicks></div>
  For each click increments the public property `counter`.
*/
@Component({ 
  selector: 'container',
  template: `<div log-clicks (changes)="changed($event)"></div>`,
})
export class Container {  
  @Output() changes = new EventEmitter();
  
  changed(value){
    this.changes.emit(value);
  }
}

describe('Directive: logClicks', () => {
  let fixture, container, element;    

  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Container, logClicks ]
    });

    fixture = TestBed.createComponent(Container);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });
  
  //specs
  it('should increment counter (async)', async(() => {
    let div = element.querySelector('div');
    //set up subscriber
    container.changes.subscribe(x => { 
      expect(x).toBe(1);
    });
    //trigger click on container
    div.click();
  }));

  it('should increment counter (fakeAsync/tick)', fakeAsync(() => {
    let div = element.querySelector('div');
    //set up subscriber
    container.changes.subscribe(x => { 
      expect(x).toBe(1);
    });
    //trigger click on container
    div.click();
    //execute all pending asynchronous calls
    tick();
  }));
  
  it('should increment counter (done)', done => {
    let div = element.querySelector('div');
    //set up subscriber
    container.changes.subscribe(x => { 
      expect(x).toBe(1);
      done();
    });
    //trigger click on container
    div.click();
  });
}) 