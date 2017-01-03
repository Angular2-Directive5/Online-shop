import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service'
import { AdvertsService } from '../services/adverts.service'


@Component({
    selector: 'profile',
    template: `
        <h1 *ngFor="let user of user.result">{{ user.Username }}</h1>
        <h1 *ngFor="let user of user.result">{{ user.CreatedAt | date }}</h1>
        <h1 *ngFor="let user of user.result">{{ user.Id }}</h1>
        <h1 *ngFor="let advert of adverts.result">{{ advert.CreatedAt | date }}</h1>

        
    `
})

export class Profile implements OnInit {
    user = {};
    id: any;
    adverts = {};

    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private location: Location,
        private advertsService: AdvertsService) {
    }




    ngOnInit() {
        this.userService.getCurrentUser()
            .then((data) => this.id = data.result.Id)
            .then((data) => this.userService.getById(data)
                .then((data) => this.user = data))
                
            



    }
}
