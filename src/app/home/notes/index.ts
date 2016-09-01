import { Component } from '@angular/core'
import { NoteCard } from './note-card/index'

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard],
})
export class Notes {
  notes = [
    {
      title: 't',
      value: 'v',
    },
    {
      title: 't1',
      value: 'v1',
    },
  ]
}