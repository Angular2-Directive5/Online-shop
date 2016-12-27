import { RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { MainContainer } from './containers/main-container'
import { About } from './containers/about'
import { Login } from './containers/login-form'

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: MainContainer
    },
    {
        path: 'about',
        component: About

    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '**',
        redirectTo: ''
    }
])
