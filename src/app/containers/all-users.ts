import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { OnInit } from '@angular/core';

var Everlive = require('everlive-sdk')
var apiKey = '656rc4p2f15c5tlj';
var el = new Everlive({
    appId: apiKey,
    scheme: 'https',
    authentication: {
        persist: true
    }
});



@Component({
    selector: 'all-users',
    template: `
    <div class="collection">
         <a class="collection-item" *ngFor="let user of users.result" [routerLink]="['/users', user.Id]">{{ user.Username }}</a>
    </div>
`
})


export class AllUsers implements OnInit {
    constructor(private usersService: UserService) { }
    users = {}


    ngOnInit(): void {

        this.usersService.getAll()
            .then(data => this.users = data)
            .then((data => console.log(data)))



    }



}
