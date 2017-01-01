import { Component, OnInit } from '@angular/core';
import { AdvertsService } from '../services/adverts.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'advert-details',
    template: `
    <h1 *ngFor="let advert of adverts.result">{{ advert.Title }}</h1>
    <h1 *ngFor="let advert of adverts.result">{{ advert.CreatedAt | date }}</h1>
    
    `
})

export class AdvertDetails implements OnInit {
    
    

    constructor(private advertService: AdvertsService, private route: ActivatedRoute, private location: Location) {


    }

    adverts = {}

    ngOnInit() {
       let id = this.route.snapshot.params['id'];
        console.log(id);

        this.advertService.getById(id)
            .then((data) => this.adverts = data)
            .then((data) => console.log(data));
    }
}


