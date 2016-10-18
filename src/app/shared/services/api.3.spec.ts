import { addProviders } from '@angular/core/testing/testing'
import { ApiService } from './api.service'
import { MockBackend } from '@angular/http/testing/mock_backend'
import { BaseRequestOptions, Http, ResponseOptions, Response } from '@angular/http'
import { inject } from '@angular/core/testing/test_injector'
import { async } from '@angular/core/testing/async'
import { Observable } from 'rxjs'

describe('ApiService', () => {
  let http, api;

  beforeEach(() => addProviders([MockBackend, BaseRequestOptions, ApiService, {
    provide: Http,
    useFactory: (backend, options) => new Http(backend, options),
    useValue: {
      // get():
    },
    deps: [MockBackend, BaseRequestOptions]
  }]))

  beforeEach(inject([ApiService, Http], (apiService, httpService) => {
    api = apiService
    http = httpService
  }))

  it('should make get request by spy on http', async(() => {
    let response = { notes: [1, 2, 3] }

    spyOn(http, 'get').and.returnValue(Observable.from([new Response(
      new ResponseOptions({body: JSON.stringify(response), status: 200})
    )]))

    api.get('/notes')
      .subscribe(notes => {
        expect(notes).toEqual(response)
      })
  }))
})
