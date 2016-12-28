import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
var Everlive = require('everlive-sdk')
var apiKey = '656rc4p2f15c5tlj';
var el = new Everlive(apiKey);



@Component({
    selector: 'register',
    template: `
    <div class="container">
    <div class="row">
        <div class="col m12">
            <h2 class="center-align">Login</h2>
            <div class="row">
                <form class="col s12" (submit)="registerUser()">
                    <div class="row">
                        <div class="input-field col s12">
                            <input  [(ngModel)]="user.name" name="name" id="name" type="text" class="validate">
                            <label for="username">User Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input [(ngModel)]="user.email" id="email" name="email" type="email" class="validate">
                            <label for="email">Email</label>  
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input [(ngModel)]="user.pass" id="pass" name="pass" type="password" class="validate">
                            <label for="pass">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12">
                            <p>
                                <input type="checkbox" id="remember">
                                <label for="remember">Remember me</label>
                            </p>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="row">
                        <div class="col m12">
                            <p class="right-align">
                                <button class="btn btn-large waves-effect waves-light" type="submit" name="action">Register</button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
`
})

export class Register {

    constructor(private userService: UserService ) {}

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