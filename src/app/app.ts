import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <div>
    <navbar></navbar>
    
    <router-outlet></router-outlet>
    <page-footer></page-footer>
    </div>
`
})

export class App { }
