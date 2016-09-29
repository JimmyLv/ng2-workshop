import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { ApiService } from './api.service'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY = 'retain_token'
  user: any

  constructor(private router: Router,
              private apiService: ApiService) {
  }

  isAuthorized(): boolean {
    return !!localStorage.getItem(this.JWT_KEY)
  }

  setJWT(jwt: string): void {
    localStorage.setItem(this.JWT_KEY, jwt)
    this.apiService.setHeaders({
      'Authorization': `Bearer ${jwt}`
    })
  }

  authenticate(path: string, creds: any): Observable<any> {
    return this.apiService.post(`/${path}`, creds)
      .do(res => this.setJWT(res.token))
      .do(res => this.user = res.data)
      .map(res => res.data)
  }

  signOut(): void {
    localStorage.removeItem(this.JWT_KEY)
    this.user = null
    this.router.navigate(['/auth'])
  }

  canActivate(): boolean {
    const isAuth = this.isAuthorized()

    if (!isAuth) {
      this.router.navigate(['/auth'])
    }

    return isAuth
  }
}
