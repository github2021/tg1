import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivationStart } from '@angular/router';
import { routes } from '../../app-routing.module'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  routes: Route[]
  routerLink: string;

  constructor(private router: Router, private title: Title) {

    this.routes = routes.slice(0, routes.length - 1)

    this.router.events.subscribe((x) => {
      if (x instanceof ActivationStart) {
        window.scrollTo(0, 0)
        this.routerLink = x.snapshot.routeConfig.path;
        this.title.setTitle(x.snapshot.data.pageTitle)
      }
    })




  }

  ngOnInit() {}


}
