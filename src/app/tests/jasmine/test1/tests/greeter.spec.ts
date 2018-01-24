import {ComponentFixture, TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';





import {Component, Input} from '@angular/core';

@Component({
  selector: 'greeter',
  template: `<div highlight><h1>Hello {{name}}!</h1></div>`,
  styles: [`:host { color:blue; } .info { color: black; }`],
  host: {
    'style': 'color: pink;',
    'class': 'info'
  }
})
export class Greeter { 
  @Input() name;
}







import {Directive} from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    'style': 'background-color: yellow;'
  }
})
export class Highlight { }








/* 
  Usage:     <greeter name="Joe"></greeter> 
  Renders:   <h1>Hello Joe!</h1>
*/
describe('Component: Greeter', () => {
  let fixture, greeter, element, de;
  
  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Greeter, Highlight ]
    });

    fixture = TestBed.createComponent(Greeter);
    greeter = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
  });
  
  //specs
  it('should render `Hello World!` (async)', async(() => {
    greeter.name = 'World';
    //trigger change detection
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(element.querySelector('h1').innerText).toBe('Hello World!');
      
      // <debugElement> also points to container component same as <fixture>
      expect(de.query(By.directive(Highlight)).componentInstance).toBe(greeter);
      
      // single match: query
      expect(de.query(By.all()).nativeElement.innerText).toBe('Hello World!');
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
      expect(de.query(By.directive(Highlight)).nativeElement.innerText).toBe('Hello World!');
      expect(de.query(By.directive(Highlight)).componentInstance.name).toBe('World');

      // multiple match: queryAll
      de.queryAll(By.all()).forEach(node => {
        if (node.nativeElement.matches('h1')) {
          expect(node.nativeElement.innerText).toBe('Hello World!');
        }
      });
    });
  }));
  
  it('should render `Hello World!` (fakeAsync/tick)', fakeAsync(() => {
    greeter.name = 'World';
    //trigger change detection
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();
    expect(element.querySelector('h1').innerText).toBe('Hello World!');
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
  }));
  
  it('should render `Hello World!` (done)', done => {
    greeter.name = 'World';
    //trigger change detection
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(element.querySelector('h1').innerText).toBe('Hello World!');
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
      done();
    });
  });
}) 