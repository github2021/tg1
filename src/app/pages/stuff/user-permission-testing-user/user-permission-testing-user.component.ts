import {
  Component,
  OnInit
} from '@angular/core';
import { Api2Service } from '../user-permission-testing-shared/api2.service';
import { ActivatedRoute } from '@angular/router';

import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-user-permission-testing-user',
  templateUrl: './user-permission-testing-user.component.html',
  styleUrls: ['./user-permission-testing-user.component.scss'],
})
export class UserPermissionTestingUserComponent implements OnInit {

  userId
  user

  clicked: any = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false
  };

  onclick(key: any): void {
    this.clicked[key] = true;
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }

  public many: Array < string > = ['The', 'possibilities', 'are', 'endless!'];
  public many2: Array < string > = ['Explore', 'them'];


  private onDropModel(args: any): void {
    let [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);
  }

  private onRemoveModel(args: any): void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }


  groups: Array < any > = [{
      name: 'Group A',
      items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
    },
    {
      name: 'Group B',
      items: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }, { name: 'Item 4' }]
    }
  ];




  constructor(
    private dragulaService: DragulaService,
    private api2service2: Api2Service,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.userId = _activatedRoute.snapshot.params.id


    dragulaService.drag.subscribe((value) => { this.onDrag(value.slice(1)); });
    dragulaService.drop.subscribe((value) => { this.onDrop(value.slice(1)); });
    dragulaService.over.subscribe((value) => { this.onOver(value.slice(1)); });
    dragulaService.out.subscribe((value) => { this.onOut(value.slice(1)); });



      dragulaService.setOptions('bag3', { removeOnSpill: true });
      dragulaService.setOptions('bag4', { revertOnSpill: true });
      dragulaService.setOptions('bag5', { copy: true });
      dragulaService.setOptions('bag6', {
        moves: function(el: any, container: any, handle: any): any {
          console.log(el, container);
          return handle.className === 'handle';
        }
      });

    dragulaService.dropModel.subscribe((value: any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value: any) => {
      this.onRemoveModel(value.slice(1));
    });
    console.log(dragulaService);
  }



  ngOnInit() {

    // this.api2service2.penis().subscribe(x => {
    //   this.user = x[this.userId]
    // })

    this.user = this.api2service2.users[this.userId]
  }





  ngOnDestroy(){
    this.dragulaService.destroy('bag1');
    this.dragulaService.destroy('bag2');
    this.dragulaService.destroy('bag3');
    this.dragulaService.destroy('bag4');
    this.dragulaService.destroy('bag5');
    this.dragulaService.destroy('bag6');
    this.dragulaService.destroy('bag7');
    this.dragulaService.destroy('bag8');
    this.dragulaService.destroy('bag9');
  }


  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }
}
