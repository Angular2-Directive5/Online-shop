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
    <h1 *ngFor="let user of users.result">{{user.Username}}</h1>

`
})


export class AllUsers implements OnInit {
    constructor(private usersService: UserService) { }
    users = {}
   

    getAllUsers() {
        return this.usersService.getAll()

        
    }

    ngOnInit(): void {
       
        this.getAllUsers()
            .then(data => this.users = data)
            .then((data => console.log(data))) 
               
             
             
    }

   

}
