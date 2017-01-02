import { Directive, ElementRef, HostListener } from '@angular/core';

import { UserService } from '../services/user.service'
import { AdvertsService } from '../services/adverts.service'

const MARKED = 'glyphicon glyphicon-ban-circle'

@Directive({
    selector: '[mark-as-exclude]'
})

export class Exclude {

    constructor(private userService: UserService,
        private advertsService: AdvertsService,
        private elementRef: ElementRef) {
    }

    @HostListener('click') onItemClick() {
        console.log('boom');

        this.elementRef.nativeElement.parentNode.style = 'display: none;';

    }
}
