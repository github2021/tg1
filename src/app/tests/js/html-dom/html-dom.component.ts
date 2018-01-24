import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-dom',
  templateUrl: './html-dom.component.html',
  styleUrls: ['./html-dom.component.scss']
})
export class HtmlDomComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log(document);
    document.getElementById("analbutton").addEventListener("click", this.displayDate)
  }

  displayDate() {
    document.getElementById("analsex").innerHTML = Date();
  }

}
