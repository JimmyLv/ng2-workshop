import { Response, Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class ApiService {
  api_url: string = 'http://localhost:3500/'
  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })

  constructor(private http: Http) {
  }

  private getJson(res: Response) {
    return res.json()
  }

  private checkError(res: Response): Response {
    if (res.status >= 200 && res < 400) {
      return res
    } else {
      throw new Error(res.statusText)
    }
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, {
      headers: this.headers
    }).map(this.checkError)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }

  post(path: string, body): Observable<any> {
    return this.http.post(`${this.api_url}${path}`, JSON.stringify(body), {
      headers: this.headers
    }).map(this.checkError)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }
} 

