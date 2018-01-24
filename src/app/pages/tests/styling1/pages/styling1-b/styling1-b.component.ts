import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-styling1-b',
  templateUrl: './styling1-b.component.html',
  styleUrls: ['./styling1-b.component.scss']
})
export class Styling1BComponent implements OnInit {

	id:number

  constructor(private ar:ActivatedRoute) {

  	this.ar.data.subscribe(res=>{
  		this.id = res.id
  	})

  }
  ngOnInit() {}

}
