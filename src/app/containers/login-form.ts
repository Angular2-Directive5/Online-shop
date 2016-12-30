import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'

@Component({
    selector: 'login',
    template: `
    <div class="container">
    <div class="row">
        <div class="col m12">
            <h2 class="center-align">Login</h2>
            <div class="row">
                <form class="col s12" (submit)="logInUser()">
                    <div class="row">
                        <div class="input-field col s12">
                            <input  [(ngModel)]="user.name" name="name" id="name" type="text" class="validate">
                            <label for="username">User Name</label>
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
                                <button class="btn btn-large waves-effect waves-light" type="submit" name="action">Login</button>
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

export class Login {
    constructor(private userService: UserService, private router: Router) { }

    user = {
        name: '',
        pass: '',


    }

    logInUser() {

        const {name, pass} = this.user
        this.userService.login(name, pass)
        this.router.navigateByUrl('');


    }

}
