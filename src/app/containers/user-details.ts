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

        // TODO: Added service logic
        this.adverts = {
            'result': [
                {
                    'Id': 'asdsadasgasd0',
                    'Title': 'TitleTitle',
                    'Pictures': {
                        'pic': 'test'
                    },
                    'AdvertDescription': 'AdvertDescriptionAdvertDescription dssadas dsd asd sf',
                    'CreatedAt': Date()
                },
                {
                    'Id': 'asdasdas',
                    'Title': 'Aasd',
                    'Pictures': {
                        'pic': 'test'
                    },
                    'AdvertDescription': 'asafsas dssadas dsd asd sf',
                    'CreatedAt': Date()
                },
                {
                    'Id': 'asvavsvasv',
                    'Title': 'Title   Title',
                    'Pictures': {
                        'pic': 'test'
                    },
                    'AdvertDescription': 'AAAAAAAAAAAA dssadas dsd asd sf',
                    'CreatedAt': Date()
                }
            ]
        }

        console.log(this.adverts);
    }
}
