import {
  Component,
  OnInit,
  NgZone,
  ViewEncapsulation,
  ViewChild,
  NgModule,
  EventEmitter,
  Output
} from '@angular/core';

import { MatSidenav } from '@angular/material';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

const small_width_breakpoint = 720;

@Component({
  selector: 'app-styling1-d',
  templateUrl: './styling1-d.component.html',
  styleUrls: ['./styling1-d.component.scss']
})
export class Styling1DComponent implements OnInit {

  params: Observable < Params > ;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${small_width_breakpoint}px)`);


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,

    zone: NgZone

  ) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }


  @ViewChild(MatSidenav) sidenav: MatSidenav;
  //@Output() toggleSidenav = new EventEmitter<void>();

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });

    this.params = combineLatest(
      this._route.pathFromRoot.map(route => route.params),
      Object.assign);

  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
