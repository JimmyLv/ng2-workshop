import { Injectable } from '@angular/core';
import { ApiService } from './api'

@Injectable()
export class NoteService {
  private apiService: ApiService
  path: string = '/notes'

  constructor(apiService: ApiService) {
    this.apiService = apiService
  }

  createNote(note) {
    return this.apiService.post(this.path, note)
  }

  getNotes() {
    return this.apiService.get(this.path)
  }
}
