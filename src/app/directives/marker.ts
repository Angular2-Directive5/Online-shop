import { Directive, ElementRef, HostListener } from '@angular/core';

import { UserService } from '../services/user.service'
import { AdvertsService } from '../services/adverts.service'

const MARKED = 'glyphicon-star'
const EMPTY = 'glyphicon-star-empty'

@Directive({
    selector: '[mark-as-favourite]'
})

export class MarkAsFavourite {

    constructor(private userService: UserService,
        private advertsService: AdvertsService,
        private elementRef: ElementRef) {        
    }

    @HostListener('click') onItemClick() {
        // TODO Add save to array in user 
        if (this.elementRef.nativeElement.classList.contains(MARKED)) {            
            this.elementRef.nativeElement.classList.remove(MARKED);
            this.elementRef.nativeElement.classList.add(EMPTY);
        } else {            
            this.elementRef.nativeElement.classList.add(MARKED);            
            this.elementRef.nativeElement.classList.remove(EMPTY);            
        }
    }
}
