import {Component, Injector, Injectable, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, CanActivate, Router} from 'angular2/router';

function isLoggedIn() {

  let show = true;
  if (show == true) {
    return true;
  }
  else {
    return false;
  }
}

@CanActivate(() => isLoggedIn())
@Component({
  selector: 'home-prive',
  template: `<h1>For admisable user !</h1>
             <button (click)="goHome()">
             Go Home !
             </button>
  `,
  directives: [ROUTER_DIRECTIVES, RouterOutlet]
})
export class AcceuilComponent implements OnInit {
  auth: any;

  constructor(private _router: Router) {

  }

  goHome() {
    this.auth.navigate(['Public']);
  }

  ngOnInit() {
    let show = false;
    if (show == true) {

    }
    else {
      this._router.navigate(['Public']);
    }
  }
}
