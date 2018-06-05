import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            height: '100%',
            transform: 'translateX(-100%)',
          }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('200ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(25%)'}),
            style({opacity: 0.5, transform: 'translateX(75%)'}),
            style({opacity: 1, transform: 'translateX(100%)'})
          ])),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('200ms ease-in',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})
export class AppComponent {

  ngOnInit(){
  }

  // change the animation state
  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'about';
  }
  
}
