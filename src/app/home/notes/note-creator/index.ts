import { Component, Output, EventEmitter } from '@angular/core'
import { isEmpty } from 'lodash'
import { ColorPicker } from "./color-picker"

@Component({
  selector: 'note-creator',
  template: require('./note-creator.html'),
  styles: [require('./note-creator.css')],
  directives: [ColorPicker]
})
export class NoteCreator {
  isFocus: boolean = false
  selectedColor = 'white'
  newNote = {
    title: '',
    value: '',
  }

  @Output()
  onCreateNote = new EventEmitter()

  createNote() {
    const { title, value } = this.newNote
    if (isEmpty(title) || isEmpty(value)) {
      alert('Please input title and value!')
      return false
    }

    this.onCreateNote.emit({ title, value, color: this.selectedColor })
    this.newNote = { title: '', value: '' }

    return false
  }

  pickColor(color) {
    this.selectedColor = color
  }
}
