import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './app/views/about.html'
})

export class About implements OnInit {
    companyName: string;
    aboutUs: string;

    ngOnInit() {
        this.companyName = 'BuyPriNas';
        this.aboutUs = `
        BuyPriNas is an Bulgarian multinational corporation and e-commerce company, providing consumer-to-consumer and
         business-to-consumer sales services via the Internet. It is headquartered in Sofia,
          Bulgaria. BuyPriNas was founded by friends in 1995, and became a notable success story 
          of the dot-com bubble. Today it is a multibillion-dollar business with operations localized in over 1 countries.
        `
    }
}
