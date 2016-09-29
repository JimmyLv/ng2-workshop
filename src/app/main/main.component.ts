import { Component, OnInit } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  selector: 'main',
  template: require('./main.component.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class MainComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
