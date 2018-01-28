import { Component, OnInit } from '@angular/core';
/* beautify preserve:start */declare let $: any;/* beautify preserve:end */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/operator/do'
//import 'rxjs/operator/take'
import 'rxjs/add/operator/take';


export * from '../a/a.component'
import * as analsex from 'angularfire2'


import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  @ViewChild('btn') button: ElementRef;
  @ViewChild('penis') penis: ElementRef;

  penis$

  constructor() {
    //console.log($);


    const btn = $('#btn');
    this.penis$ = Observable.fromEvent(btn, 'click');
    $(document).ready(() => {})


    // $('#btn').click(() => { alert(734887347834) })

    // $("#btn").click(function() {
    //   alert("The paragraph was clicked.");
    // });

  }

  ngOnInit() {
    this.penis$.subscribe(x => {
      console.log(x);
    })
  }

  ngAfterViewInit() {

    let analsex$ = Observable.fromEvent(this.button.nativeElement, 'click')
      .subscribe(res => console.log(res));

    let analsexpenis$ = Observable.fromEvent(this.penis.nativeElement, 'keyup')
      .subscribe( res => console.log(
        //res.target.value
        ) )


    const source = Observable.from([1, 2, 3, 4, 5]);
    //add 10 to each value
    const example = source.map(val => val + 10)
    //output: 11,12,13,14,15
    const subscribe = example.subscribe(val => console.log(val));

    const source2 = Observable.of(1, 2, 3, 4, 5);
    //take the first emitted value then complete
    const example2 = source2.take(1);
    //output: 1
    const subscribe2 = example.subscribe(val => console.log(val));

    //emit value every 1s
    const interval = Observable.interval(1000);
    //take the first 5 emitted values
    const example3 = interval.take(5);
    //output: 0,1,2,3,4
    const subscribe3 = example3.subscribe(val => console.log(val));


    //emit (1,2,3,4,5)
    const source4 = Observable.from([1, 2, 3, 4, 5]);
    //add 10 to each value
    const example4 = source4.map(val => val + 10);
    //output: 11,12,13,14,15
    const subscribe4 = example4.subscribe(val => console.log(val));

    //emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
    const source5 = Observable.from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);
    //grab each persons name
    const example5 = source5.map(person => person.name);
    //output: "Joe","Frank","Ryan"
    const subscribe5 = example5.subscribe(val => console.log(val));


  }

  fuck() {}

}
