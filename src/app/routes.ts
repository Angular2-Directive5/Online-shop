import { RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { MainContainer } from './containers/main-container'
import { About } from './containers/about'
import { Login } from './containers/login-form'
import { Register } from './containers/register-form'
import { AllUsers } from './containers/all-users'
import { UserDetails } from './containers/user-details';


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
        path: 'register',
        component: Register
    },
    {
        path: 'users',
        component: AllUsers
    },
    {
        path: 'users/:id',
        component: UserDetails
    },

    {
        path: '**',
        redirectTo: ''
    }
])
