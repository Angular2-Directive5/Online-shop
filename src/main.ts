import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { FormsModule } from '@angular/forms';
import {enableProdMode} from '@angular/core';

enableProdMode()

import { App } from './app/app'

import { routes } from './app/routes'

import { Navbar } from './app/ui/navbar'

import { UserService } from './app/services/user.service'
import { AdvertsService } from './app/services/adverts.service'

import { MainContainer } from './app/containers/main-container'
import { About } from './app/containers/about'
import { Login } from './app/containers/login-form'
import { Register } from './app/containers/register-form'

import { AdvertFilterPipe, AdvertSortPipe, CapitalizeFirstLetterPipe } from './app/pipes'
import { MarkAsFavourite, Exclude } from './app/directives'

import { AllUsers } from './app/containers/all-users'
import { UserDetails } from './app/containers/user-details'
import { Footer } from './app/containers/footer'
import { Home } from './app/containers/home'
import { AdvertDetails } from './app/containers/adverts-details'
import { AdvertForm } from './app/containers/advert-form'
import { Search } from './app/containers/search'
import { Profile } from './app/containers/profile'





@NgModule({
    declarations: [App,
        Navbar,
        MainContainer,
        About,
        Login,
        Register,
        AllUsers,
        UserDetails,
        Footer,
        Home,
        AdvertDetails,
        AdvertForm,
        Search,
        AdvertFilterPipe,
        AdvertSortPipe,
        CapitalizeFirstLetterPipe,
        MarkAsFavourite,
        Exclude,
        AdvertSortPipe,
        Profile
    ],
    imports: [BrowserModule, routes, FormsModule],
    providers: [UserService, AdvertsService],
    bootstrap: [App]

})

export class Main { }

platformBrowserDynamic().bootstrapModule(Main)

