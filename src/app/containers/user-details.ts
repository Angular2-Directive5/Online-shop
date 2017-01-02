import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'user-details',
    templateUrl: './app/views/user-details.html'
})

export class UserDetails implements OnInit {



    constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) {


    }

    user = {}

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        console.log(id);

        this.userService.getById(id)
            .then((data) => this.user = data)
            .then((data) => console.log(data));
    }
}


