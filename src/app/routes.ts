import { RouterConfig } from '@angular/router'
import { Home } from './home/'

export const router: RouterConfig = [
  { path: '', component: Home },
  { path: '**', redirectTo: '' },
]
