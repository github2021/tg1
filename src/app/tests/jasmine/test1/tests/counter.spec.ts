import {inject, TestBed} from '@angular/core/testing';
import {async, fakeAsync, tick} from '@angular/core/testing';






import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>
      <h1>{{counter}}</h1>
      <button (click)="change(1)">+1</button>
      <button (click)="change(-1)">-1</button>
    </div>`
})
export class Counter {
  @Output() changes = new EventEmitter();
  counter:any;
  
  constructor(){
    this.counter = 0;
  }
  
  change(increment) {
    this.counter += increment;
    //we use emit as next is marked as deprecated
    this.changes.emit(this.counter);
  }
}








/* 
  Usage: <counter (changes)="log($event)"></counter> 
         log($event) { console.log($event) }
*/

describe('EventEmitter: Counter', () => {
  let counter;
  
  //setup
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ Counter ]
  }));
  
  beforeEach(inject([Counter], c => {
    counter = c;
  }))
  
  //specs
  it('should increment +1 (async)', async(() => {
    counter.changes.subscribe(x => { 
      expect(x).toBe(1);
    });
    counter.change(1);
  }));

  it('should decrement -1 (async)', async(() => {
    counter.changes.subscribe(x => { 
      expect(x).toBe(-1);
    });
    counter.change(-1);
  }));

  it('should increment +1 (fakeAsync/tick)', fakeAsync(() => {
    counter.changes.subscribe(x => { 
      expect(x).toBe(1);
    });
    counter.change(1);
    //execute all pending asynchronous calls
    tick();
  }));

  it('should decrement -1 (fakeAsync/tick)', fakeAsync(() => {
    counter.changes.subscribe(x => { 
      expect(x).toBe(-1);
    });
    counter.change(-1);
    //execute all pending asynchronous calls
    tick();
  }));
  
  it('should increment +1 (done)', done => {
    counter.changes.subscribe(x => { 
      expect(x).toBe(1);
      done();
    });
    counter.change(1);
  });

  it('should decrement -1 (done)', done => {
    counter.changes.subscribe(x => { 
      expect(x).toBe(-1);
      done();
    });
    counter.change(-1);
  });  
}) 