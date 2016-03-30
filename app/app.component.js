System.register(['angular2/core', 'angular2/router', './public/home', './prive/acceuil'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, acceuil_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (acceuil_1_1) {
                acceuil_1 = acceuil_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                //dans le construcutor tu injectes Router
                //ngInit tu décides pricvé ou public 
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <nav>\n    <!--\n      <a [routerLink]=\"['Public']\">Public</a>\n      <a [routerLink]=\"['Prive']\">Prive</a>\n    -->\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, home_1.HomeComponent]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/public/...',
                            name: 'Public',
                            component: home_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/prive',
                            name: 'Prive',
                            component: acceuil_1.AcceuilComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map