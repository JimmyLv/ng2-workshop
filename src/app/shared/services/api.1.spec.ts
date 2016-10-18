import { addProviders } from '@angular/core/testing/testing'
import { ApiService } from './api.service'
import { MockBackend } from '@angular/http/testing/mock_backend'
import { BaseRequestOptions, Http, ResponseOptions, Response } from '@angular/http'
import { inject } from '@angular/core/testing/test_injector'
import { async } from '@angular/core/testing/async'
describe('ApiService', () => {
  let mockBackend, api;

  beforeEach(() => addProviders([MockBackend, BaseRequestOptions, ApiService, {
    provide: Http,
    useFactory: (backend, options) => new Http(backend, options),
    deps: [MockBackend, BaseRequestOptions]
  }]))

  beforeEach(inject([ApiService, MockBackend], (apiService, mock) => {
    api = apiService
    mockBackend = mock
  }))

  it('should make get request', async(() => {
    let response = { notes: [1, 2, 3] }

    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(
        new ResponseOptions({ body: JSON.stringify(response), status: 200 }))
      )
    })

    api.get('/notes')
      .subscribe(notes => {
        expect(notes).toEqual(response)
      })
  }))
})
