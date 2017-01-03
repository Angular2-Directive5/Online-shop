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
    
    user = {};
    adverts = {};
    filterProperty: string;
    sortingWay: number;
    sortingProperty: string;

    ngOnInit() {
        this.advertsService.getAll()
            .then(data => this.adverts = data)
            .then((data => console.log(data)));

        this.userService.getAll()
            .then(data => this.user = data)
            .then((data => console.log(data)));
    }

    onWayChange(event: any) {
        this.sortingWay = +event.target.value;
    }

    onSortingChange(event: any) {
        this.sortingProperty = event.target.value;
    }

}
