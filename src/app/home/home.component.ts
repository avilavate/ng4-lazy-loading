import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-home',
  template: `
    <h3>
      home Works!
    </h3>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
