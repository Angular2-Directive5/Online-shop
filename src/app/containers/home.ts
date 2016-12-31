import { Component } from '@angular/core';
import { AdvertsService } from '../services/adverts.service'
import { OnInit } from '@angular/core';


@Component({
    selector: 'home',
    template: `
  <div *ngFor="let advert of adverts.result" class="col s12 m7">
    <h3 class="header">{{advert.Title}}</h3>
    <div class="card horizontal">
      <div class="card-image">
        <img src="http://lorempixel.com/100/190/nature/6">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{{advert.AdvertDescription}}.</p>
          <p>Created at: {{advert.CreatedAt | date}}</p>
        </div>
        <div class="card-action">
          <a [routerLink]="['/adverts', advert.Id]">Details</a>
        </div>
      </div>
    </div>
  </div>

`
})


export class Home implements OnInit {
    constructor(private advertsService: AdvertsService) { }
    adverts = {}


    ngOnInit(): void {

        this.advertsService.getAll()
            .then(data => this.adverts = data)
            .then((data => console.log(data)))



    }



}
