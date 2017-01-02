import { Component, OnInit, Directive } from '@angular/core';
import { AdvertsService } from '../services/adverts.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'advert-details',
    template: `

    <div materialize="carousel">
          <a class="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"></a>
          <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"></a>
          <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></a>
          <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"></a>
          <a class="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"></a>
        </div><br>
    
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


