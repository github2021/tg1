import { Component, OnInit } from '@angular/core';
import { Api2Service } from '../user-permission-testing-shared/api2.service';

@Component({
  selector: 'app-user-permission-testing',
  templateUrl: './user-permission-testing.component.html',
  styleUrls: ['./user-permission-testing.component.scss']
})
export class UserPermissionTestingComponent implements OnInit {

  users

  constructor(private api2Service: Api2Service) {}

  ngOnInit() {
    // this.api2Service.penis().subscribe(x => {
    //   console.log(x)
    //   this.users = x
    // })

    this.users = this.api2Service.users
  }

}
