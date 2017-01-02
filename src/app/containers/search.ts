import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { UserService } from '../services/user.service'
import { AdvertsService } from '../services/adverts.service'

@Component({
    selector: 'searchForm',
    templateUrl: './app/views/search.html'
})

export class Search implements OnInit {

    constructor(private userService: UserService, private advertsService: AdvertsService) {
        this.filterProperty = '';
        this.sortingWay = 1;
        this.sortingProperty = 'Category';
    }

    // TODO Add services
    user = {};
    adverts = {};
    filterProperty: string;
    sortingWay: number;
    sortingProperty: string;

    ngOnInit() {
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
                    'CreatedAt': Date(),
                    'Category': 'a'
                },
                {
                    'Id': 'asdasdas',
                    'Title': 'Aasd',
                    'Pictures': {
                        'pic': 'test'
                    },
                    'AdvertDescription': 'asafsas dssadas dsd asd sf',
                    'CreatedAt': Date(),
                    'Category': 'b'
                },
                {
                    'Id': 'asvavsvasv',
                    'Title': 'Title   Title',
                    'Pictures': {
                        'pic': 'test'
                    },
                    'AdvertDescription': 'AAAAAAAAAAAA dssadas dsd asd sf',
                    'CreatedAt': Date(),
                    'Category': 'c'
                }
            ]
        }
    }

    onWayChange(event: any) {
        this.sortingWay = +event.target.value;        
    }

    onSortingChange(event: any) {
        this.sortingProperty = event.target.value;        
    }

}
