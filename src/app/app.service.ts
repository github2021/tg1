import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {

  private goals = new BehaviorSubject < any > (['The initial Goal', 'Another silly life goal'])
  goal = this.goals.asObservable();

  constructor() {}

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
