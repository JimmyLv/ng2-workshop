import { Component } from '@angular/core'
import { NoteCard } from './note-card/index'
import { NoteCreator } from './note-creator/index'
import { NoteService } from '../../shared/services/notes'

@Component({
  selector: 'notes',
  template: require('./notes.html'),
  styles: [require('./notes.css')],
  directives: [NoteCard, NoteCreator],
})
export class Notes {
  selectedColor = 'white'
  notes = []

  constructor(private noteService: NoteService) {
    this.noteService.getNotes()
      .subscribe(res => this.notes = res.data)
  }

  checkCard(note, i) {
    console.log(note)
    this.notes.splice(i)
  }

  addNote(note) {
    this.noteService.createNote(note).subscribe(note => {
      this.notes.push(note)
    })
  }
}
