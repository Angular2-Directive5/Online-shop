import { Component } from '@angular/core';
import { AdvertsService } from '../services/adverts.service'

var Everlive = require('everlive-sdk')
var apiKey = '656rc4p2f15c5tlj';
var el = new Everlive(apiKey);

@Component({
    selector: 'advert-form',
    //templateUrl: './app/views/advert-form.html' // It does not work for some reason
    template: '<div></div>'
})

export class AdvertForm {

    constructor(private advertsService: AdvertsService) { }

    advert = {
        title: '',
        advertDescription: '',
        category: ''
    }

    createAdvert() {

        const {title, advertDescription, category} = this.advert


        this.advertsService.create(title, advertDescription, category);

    }
}
