import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app/app'
import { Navbar } from './app/ui/navbar'
import { MainContainer } from './app/containers/main-container'
import { routes } from './app/routes'
import { About } from './app/containers/about'
import { Login } from './app/containers/login-form'

@NgModule({
    declarations: [App, Navbar, MainContainer, About, Login],
    imports: [BrowserModule, routes],
    bootstrap: [App]

})

export class Main { }

platformBrowserDynamic().bootstrapModule(Main)

