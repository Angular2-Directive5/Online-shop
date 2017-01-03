import { Component, OnInit } from '@angular/core'

var Everlive = require('everlive-sdk')
var apiKey = '656rc4p2f15c5tlj';
var el = new Everlive({
  appId: apiKey,
  scheme: 'https',
  authentication: {
    persist: true
  }
});

@Component({
  selector: 'navbar',
  template: `
  <nav class="grey darken-1">
    <div class="nav-wrapper">
      <a [routerLink]="['home']" href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a [routerLink]="['home']" href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a  [routerLink]="['search']" href="#">Search</a></li>
        <li><a  [routerLink]="['users']" href="#">Users</a></li>
        <li><a [routerLink]="['about']" href="#">About</a></li>
        <li *ngIf="!isLoged"><a [routerLink]="['login']">Log in</a></li>
        <li *ngIf="!isLoged"><a [routerLink]="['register']">Register</a></li>
        <li *ngIf="isLoged"><a (click)="logOutUser()">Log out</a></li>
        <li *ngIf="isLoged"><a [routerLink]="['profile']">Hello {{username}}</a></li>
        </ul>
    </div>
  </nav>
    `
})

export class Navbar implements OnInit {
  isLoged: boolean;
  username: string;

  ngOnInit() {
    el.Users.currentUser((data) => {
      if (data.result) {
        this.isLoged = true;
        this.username = data.result.Username;
      }
    }, function (err) {

    });

  }

  logOutUser() {
    el.authentication.logout(() => {
      this.isLoged = false;
      alert("Logout successful!");
    }, function (err) {
      alert("Failed to logout: " + err.message);
    });
  }



}
