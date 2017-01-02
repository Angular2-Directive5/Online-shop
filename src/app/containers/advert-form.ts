import { Component } from '@angular/core';

import { UserService } from '../services/user.service'
import { AdvertsService } from '../services/adverts.service'

var Everlive = require('everlive-sdk')
var apiKey = '656rc4p2f15c5tlj';
var el = new Everlive(apiKey);

@Component({
    selector: 'advert-form',
    // templateUrl: './app/views/advert-form.html' // It does not work for some reason
    template: '<div>HUI</div>'
})

export class AdvertForm {

    constructor(
        private advertsService: AdvertsService,
        private userService: UserService
        ) {
    }

    advert = {}

    createAdvert() {

        // const {name, email, pass} = this.user
        // var attrs = {
        //     Email: email
        // }

        // this.userService.create(name, pass, attrs);

    }
}
