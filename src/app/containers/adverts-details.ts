import { Component, OnInit, Directive } from '@angular/core';
import { AdvertsService } from '../services/adverts.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'advert-details',
    templateUrl: './app/views/adverts-details.html'
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


