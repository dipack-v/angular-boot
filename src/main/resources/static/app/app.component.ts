import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: 'tpl/header.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/wines/add', component: AddWineComponent}
])
export class AppComponent implements OnInit{
   // constructor(private router: Router) {}

    ngOnInit() {
        console.log('App initialized !9');
        //this.router.navigate(['/crisis-center']);
    }
}

@Component({
    selector: 'my-app',
    templateUrl: 'tpl/wine.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AddWineComponent implements OnInit{
   // constructor(private router: Router) {}

    ngOnInit() {
        console.log('AddWineComponent initialized !9');
        //this.router.navigate(['/crisis-center']);
    }
}
