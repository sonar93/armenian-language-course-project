import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-right-view',
  templateUrl: './right-view.component.html',
  styleUrls: ['./right-view.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1=>2',[
        style({
          height: '!'
        }),
        query (':enter', style({transform:'translateX(100%)'})),
        query (':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(-100%)'}))]),
          query(':enter', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(0)'}))]),
        ])
      ])
    ])
  ]
})
 
export class RightViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDepth( outlet ){
    return outlet.activatedRouteData[' depth '];
  }
}
