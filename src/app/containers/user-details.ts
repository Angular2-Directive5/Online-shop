import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../services/user.service'
import { AdvertsService } from '../services/adverts.service'

@Component({
    selector: 'user-details',
    templateUrl: './app/views/user-details.html'
})

export class UserDetails implements OnInit {

    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private advertsService: AdvertsService,
        private location: Location) {
    }

    user = {};
    adverts = {};

    ngOnInit() {
        let id = this.route.snapshot.params['id'];

        this.userService.getById(id)
            .then((data) => this.user = data)
            .then((data) => console.log(data));

        this.advertsService.getAll()
            .then(data => this.adverts = data)
            .then((data => console.log(data)));

    }
}
