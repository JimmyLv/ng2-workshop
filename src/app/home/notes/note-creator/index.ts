import { Component } from '@angular/core'

@Component({
  selector: 'note-creator',
  template: require('./note-creator.html'),
  styles: [require('./note-creator.css')],
})
export class NoteCreator {
  newNote = {
    title: 'newTitle',
    value: 'newValue',
  }

  createNote() {
    console.log('created!', this.newNote)
  }
}
