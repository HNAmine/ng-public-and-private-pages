import {Component, Injector, Injectable, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, CanActivate, Router} from 'angular2/router';

@Component({
  selector: 'home-prive',
  template: `<h1>For admisable user !</h1>
             <button (click)="goHome()">
             Go Home !
             </button>
  `,
  directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
export class AcceuilComponent{

  constructor(private _router: Router) {

  }

}
