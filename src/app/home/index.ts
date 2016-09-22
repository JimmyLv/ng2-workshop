import { Component } from '@angular/core'
import { Notes } from './notes/index'

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [Notes]
})
export class Home {
}
