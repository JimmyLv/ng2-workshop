import { Component } from '@angular/core'
import { NoteCard } from './note-card/index'
import { NoteCreator } from './note-creator/index'
import { NoteService } from '../../shared/services/notes.service'

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

  checkCard(note) {
    this.noteService.completeNote(note)
      .subscribe(note => {
        let index = this.notes.findIndex(localNote => localNote.id === note.id)
        this.notes.splice(index, 1)
      })
  }

  addNote(note) {
    this.noteService.createNote(note).subscribe(note => {
      this.notes.push(note)
    })
  }
}
