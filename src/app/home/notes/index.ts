import {Component} from '@angular/core'
import {NoteCard} from "../note-card/index";

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard],
})
export class Notes {

}