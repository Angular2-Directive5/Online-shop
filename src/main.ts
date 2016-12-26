import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app/app'
import { Navbar } from './app/ui/navbar'

@NgModule({
    declarations: [App, Navbar],
    imports: [BrowserModule],
    bootstrap: [App]

})

export class Main { }

platformBrowserDynamic().bootstrapModule(Main)

