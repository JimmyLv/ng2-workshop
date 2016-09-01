import {Component} from '@angular/core'
import {AppBar} from './app-bar'
import {Notes} from './notes/index'
import {NoteCard} from "./note-card/index";

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [AppBar, Notes, NoteCard]
})
export class Home {
}