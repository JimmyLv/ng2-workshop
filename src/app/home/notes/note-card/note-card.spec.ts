import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing'
import { Component } from '@angular/core'
import { inject } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { NoteCard } from './index'

@Component({
  directives: [NoteCard],
  template: '<note-card [note]="note" (checked)="onCheck($event)"></note-card>'
})
class TestComponent {
  newNote: {title: string, content: string}

  note = {
    title: "test title",
    content: "test content"
  }

  onCheck(note) {
    this.newNote = note
  }
}

describe('NoteCard', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(inject([TestComponentBuilder], (builder: TestComponentBuilder) => {
    fixture = builder.createSync(TestComponent)
  }))

  it("should have a title", () => {
    fixture.detectChanges()

    const ele = fixture.debugElement.query(By.css('.title'))

    expect(ele.nativeElement.textContent.trim()).toBe("test title")
  })

  it("should change when onClick", () => {
    fixture.detectChanges()
    const ele = fixture.debugElement.query(By.css('.icon'))

    ele.triggerEventHandler('click', null)

    const testComponent: TestComponent = fixture.componentInstance
    expect(testComponent.newNote.title).toBe("test title")
  })
})
