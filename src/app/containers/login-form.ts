import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'


@Component({
    selector: 'login',
    templateUrl: './app/views/login-form.html'
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
        this.router.navigate([''])
        //window.location.reload();


    }

}
