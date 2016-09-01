import {Component} from '@angular/core'
import {AppBar} from './app-bar'
import {Notes} from './notes/index'

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [AppBar, Notes]
})
export class Home {
}