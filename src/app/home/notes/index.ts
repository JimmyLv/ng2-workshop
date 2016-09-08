import { Component } from '@angular/core'
import { NoteCard } from './note-card/index'
import { NoteCreator } from './note-creator/index'

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard, NoteCreator],
})
export class Notes {
  selectedColor = 'white'

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

  checkCard(note, i) {
    console.log(note)
    this.notes.splice(i)
  }

  addNote(note) {
    this.notes.push(note)
  }
}
