import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

const c_ = console.log;

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  goals: any




  constructor(private _appService: AppService) {

    const anal = [1, 2, 3, 4];
    const anal5 = [1, 37, 18, 199, 20, 72, 14, 2, 8];
    const anal6 = ['a', 'b', 'c', 'd', 'c'];
    const anal2 = ['a', 'b', 'c', 'd'];
    const anal4 = ['d', 'b', 'a', 'c'];
    const anal3 = [{ 'a': 1 }, 'b', 'c', 'd'];
    const _penis = "jsdkjdsjksdkj"


    const penis = anal2.valueOf()
    // const penis = anal5.some(this.is72)
    // const penis = anal5.some((x)=>{return x===72})
    // const penis = anal5.every((x)=>{return x>=16})
    // const penis = anal.slice(1, 3)
    // const penis = anal5.slice(-7, -2)
    // const penis = anal5.reduceRight((a,b)=>{return a+b})
    // const penis = anal5.reduce((a,b)=>{return a+b});
    // const penis = anal2.push('e', 'f')
    //const penis = anal2.concat(anal6, _penis)
    //const penis = anal2.fill('penis')
    //const penis = anal2.pop()
    //const penis = anal2.map((x)=>x+" a")
    //const penis = anal2.lastIndexOf('c')
    //const penis = anal6.indexOf('c')
    //const penis = anal6.indexOf('c',3)
    //const penis = anal2.forEach((x)=>{console.log(x)})
    //const penis = anal6.findIndex((x: any) => { return x == 'c' })
    //const penis = anal6.findIndex((x: any) => {return x == 'c' })
    //const penis = anal6.find((x: any) => {return x === 'c' })
    // let new_array = []
    // const penis = anal6.filter((x: any, y) => {
    //   if (x === 'c') { new_array.push(y);} //return 1 
    // }); console.log(new_array)
    //const penis = anal2.join("|~")
    //const penis = Array.isArray(anal)


    // anal2.unshift("x","y");
    // anal2.splice(2, 0, "x", "y");
    // anal.shift()

    // anal4.sort()
    // anal5.reverse()
    // anal5.sort((a,b)=>{return b-a})

    // let penis = anal3.toString()



    // c_('penis: ', penis);
    // c_('anal5: ', anal5);
    // c_('anal: ', anal);
    // c_('anal2: ', anal2);

  }

  is72(x) { return x === 72; }


  ngOnInit() {
    this._appService.goal.subscribe(res => this.goals = res)
  }

}
