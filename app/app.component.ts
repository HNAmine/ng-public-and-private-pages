import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './public/home';
import {AcceuilComponent} from './prive/acceuil';

@Component({
  selector: 'my-app',
  template: `
    <nav>
    <!--
      <a [routerLink]="['Public']">Public</a>
      <a [routerLink]="['Prive']">Prive</a>
    -->
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, HomeComponent]
})
@RouteConfig([

  {
    path: '/public/...',
    name: 'Public',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/prive',
    name: 'Prive',
    component: AcceuilComponent
  }
  /*{ path: '/heroes', name: 'Heroes', component: HeroListComponent },
  { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent },
  { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }*/
])
export class AppComponent implements OnInit {


  //dans le construcutor tu injectes Router
  //ngInit tu décides pricvé ou public 
  ngOnInit() {

  }
}
