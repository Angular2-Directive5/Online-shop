import { Component } from '@angular/core'

@Component({
    selector: 'navbar',
    template: `
  <nav class="grey darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Log in</a></li>
      </ul>
    </div>
  </nav>
    `
})

export class Navbar {}