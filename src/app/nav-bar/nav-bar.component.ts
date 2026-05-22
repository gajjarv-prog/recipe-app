// nav-bar.component.ts
// Renders the top navigation bar on every page
// RouterLink enables navigation between routes
// RouterLinkActive adds 'active' class to current route
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
selector: 'app-nav-bar', // Tag used in app.html
standalone: true, // No NgModule needed
imports: [RouterLink, RouterLinkActive],
templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {}