import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {HomeComponent} from './public/home';
import {AcceuilComponent} from './prive/acceuil';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [LoggedInRouterOutlet,HomeComponent]
})
@RouteConfig([
  {
    path: '/public/...',
    name: 'Public',
    component: HomeComponent,
    useAsDefault: true,
  },
  {
    path: '/prive',
    name: 'Prive',
    component: AcceuilComponent
  }
])
export class AppComponent {

}
