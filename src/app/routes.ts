import { RouterConfig } from '@angular/router'
import { Home } from './home/'
import { About } from './about/'
import { AuthComponent } from './auth/auth.component'
import { MainComponent } from './main/main.component'
import { AuthService } from './shared/services/auth.service'

export const router: RouterConfig = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthService],
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '' },
]
