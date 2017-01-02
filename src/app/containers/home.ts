import { Component, Input } from '@angular/core';
import { AdvertsService } from '../services/adverts.service'
import { OnInit } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './app/views/home.html'
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
