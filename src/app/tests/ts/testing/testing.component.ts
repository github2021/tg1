import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AppService } from '../../../app.service';

const c_ = console.log



@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [

          animate('.6s ease-in', keyframes([

            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))

        ]), { optional: true }),

        query(':leave', stagger('300ms', [

          animate('.6s ease-in', keyframes([

            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
          ]))

        ]), { optional: true })

      ])
    ])
  ]
})
export class TestingComponent implements OnInit {

  //itemCount:number = 4;
  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My First Life Goal';

  anal: number
  //goals = ["a", "b", "c"]
  goals = []

  constructor(private _appService: AppService) {

    // define a function
    var myFunction = function() {
      console.log(this);
      //console.log(myFunction)

    };

    // myFunction();

    // (function(penis) {
    //   c_(1, penis)
    //   //c_(this)
    //   const a = 1
    // })("big white");

    // this.anal = 0;


    // (function(penis) {
    //   c_(2, penis)
    //   //c_(this)
    //   const a = 1
    //   c_(3, this)
    //   //this.anal = 1
    // }("big white"));


    // c_(4, this)
    // c_(5, this.anal)


    // let billy = () => {
    //   c_(6, this)
    // }

    // function billy2() {
    //   //c_(this)

    //   let john = function(x) {
    //     c_(7, this)
    //     c_(8, arguments)
    //     c_()
    //   }

    //   john(1)
    // }



    // billy()
    // billy2()




    // c_()





  }

  ngOnInit() {
    this._appService.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._appService.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._appService.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._appService.changeGoal(this.goals);
  }

}
