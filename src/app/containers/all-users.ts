import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { OnInit } from '@angular/core';


@Component({
    selector: 'all-users',
    templateUrl: './app/views/all-users.html'
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
