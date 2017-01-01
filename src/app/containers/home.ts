import { Component, Input } from '@angular/core';
import { AdvertsService } from '../services/adverts.service'
import { OnInit } from '@angular/core';


@Component({
  selector: 'home',
  template: `
    <div class="row">
  <div *ngFor="let advert of adverts.result" class="col s12 m6 l4 ">
    <h5 class="header">{{advert.Title}}</h5>
    <div class="card">
      <div *ngFor="let pic of advert.Pictures"  class="card-image">
        <img  src="https://bs3.cdn.telerik.com/v1/656rc4p2f15c5tlj\\{{pic}}" height="190">
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
