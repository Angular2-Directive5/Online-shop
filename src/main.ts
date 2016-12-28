import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app/app'
import { Navbar } from './app/ui/navbar'
import { MainContainer } from './app/containers/main-container'
import { FormsModule } from '@angular/forms';
import { routes } from './app/routes'
import { About } from './app/containers/about'
import { Login } from './app/containers/login-form'
import { Register } from './app/containers/register-form'
import { UserService } from './app/services/user.service'
import { AllUsers } from './app/containers/all-users'

@NgModule({
    declarations: [App, Navbar, MainContainer, About, Login, Register, AllUsers],
    imports: [BrowserModule, routes, FormsModule],
    providers: [UserService],
    bootstrap: [App]

})

export class Main { }

platformBrowserDynamic().bootstrapModule(Main)

