import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-user',
  template: `
    <h3>
      user Works!
    </h3>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
