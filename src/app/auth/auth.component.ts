import { Component, OnInit } from '@angular/core'
import { AuthService } from '../shared/services/auth.service'
import { Router } from '@angular/router'

const linkText = {
  signIn: `Don't have an account?`,
  signUp: `Already have an account?`
}

@Component({
  template: require('./auth.component.html'),
  styles: [require('./auth.component.css')]
})
export class AuthComponent implements OnInit {
  user: { email: string, password: string }
  mode: 'signIn' | 'signUp'
  linkText: string

  constructor(private authService: AuthService
  ,  private router: Router) {
  }

  ngOnInit(): void {
    this.user = { email: '', password: '' }
    this.mode = 'signIn'
    this.linkText = linkText.signIn
  }

  changeMode(): void {
    if (this.mode === 'signIn') {
      this.mode = 'signUp'
      this.linkText = linkText.signUp
    } else {
      this.mode = 'signIn'
      this.linkText = linkText.signIn
    }
  }

  authenticate(): void {
    this.authService.authenticate(this.mode, this.user)
      .subscribe(() => this.router.navigate(['/']))
  }
}
