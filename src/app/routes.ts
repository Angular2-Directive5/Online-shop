import { RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { MainContainer } from './containers/main-container'
import { About } from './containers/about'
import { Login } from './containers/login-form'
import { Register } from './containers/register-form'
import { AllUsers } from './containers/all-users'
import { UserDetails } from './containers/user-details';
import { Home } from './containers/home'
import { AdvertDetails } from './containers/adverts-details'
import { AdvertForm } from './containers/advert-form'
import { Search } from './containers/search'
import { Profile } from './containers/profile'

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: Home
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
        path: 'adverts/:id',
        component: AdvertDetails
    },
    {
        path: 'advert-form',
        component: AdvertForm
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'search',
        component: Search
    },

    {
        path: '**',
        redirectTo: ''
    }
])
