import {
  Component,
  OnInit
} from '@angular/core';
import { Api2Service } from '../user-permission-testing-shared/api2.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-permission-testing-user',
  templateUrl: './user-permission-testing-user.component.html',
  styleUrls: ['./user-permission-testing-user.component.scss'],
})
export class UserPermissionTestingUserComponent implements OnInit {

  userId
  user

  source: any = ['a', 'b', 'c'];
  target: any = ['zz', 'yy', 'xx'];

  constructor(
    private api2service2: Api2Service,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.userId = _activatedRoute.snapshot.params.id
  }

  ngOnInit() {

    // this.api2service2.penis().subscribe(x => {
    //   this.user = x[this.userId]
    // })

    this.user = this.api2service2.users[this.userId]
  }

}
