import { Component } from '@angular/core';

import { UserService } from '../services/user.service'

var Everlive = require('everlive-sdk')
var apiKey = '656rc4p2f15c5tlj';
var el = new Everlive(apiKey);

@Component({
    selector: 'register',
    templateUrl: './app/views/register-form.html'
})

export class Register {

    constructor(private userService: UserService) { }

    user = {
        name: '',
        pass: '',
        email: ''

    }

    registerUser() {

        const {name, email, pass} = this.user
        var attrs = {
            Email: email
        }

        this.userService.create(name, pass, attrs);

    }
}