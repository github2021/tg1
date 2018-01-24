import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})

export class AddSiteComponent implements OnInit {

  formTouched: Boolean

  constructor() {}

  ngOnInit() {}

  canDeactivate() {
    if (this.formTouched) {
      return window.confirm('Discard changes?');
    }
    return true;
  }


  touched(x:boolean) {
    console.log(x)
    this.formTouched = x
  }


}
