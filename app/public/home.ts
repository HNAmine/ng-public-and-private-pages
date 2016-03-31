import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {SignUpComponent} from './signup.component';
import {SignInComponent} from './signin.component';
import {LoggedInRouterOutlet} from "../LoggedInOutlet";

@Component({
  selector: 'home-public',
  templateUrl: 'app/public/home.html',
  styleUrls: ['app/public/home.css'],
  directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
@RouteConfig([
  { path: '/signin', name: 'SignIn', component: SignInComponent, useAsDefault: true },
  { path: '/signup', name: 'SignUp', component: SignUpComponent}
])
export class HomeComponent { }
