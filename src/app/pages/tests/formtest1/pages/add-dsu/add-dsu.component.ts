import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-add-dsu',
  templateUrl: './add-dsu.component.html',
  styleUrls: ['./add-dsu.component.scss']
})
export class AddDsuComponent implements OnInit {

  formTouched: boolean

  constructor(private as: ApiService) {

    // console.log("blow me");
    
    // this.as.postshit().subscribe()


    // this.as.getshit().subscribe();
    // this.as.getshit().subscribe(x => { console.log(x) });
    // this.as.getshit2().subscribe(x => { console.log(x) });
    // this.as.getshit2().subscribe(x => { console.log(x) });
  }

  canDeactivate() {
    if (this.formTouched) {
      return window.confirm('Discard changes?');
    }
    return true;
  }


  touched(x: boolean) {
    // console.log(x)
    this.formTouched = x
  }

  ngOnInit() {}



}
