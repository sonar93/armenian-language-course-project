import { Component } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {trigger, transition, group, query, style, animate } from '@angular/animations';
import {Location} from '@angular/common';
import {Data} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ]),
    trigger('routeAnimation', [
      transition('1=>2, 1=>3', [
        style({
          height: '!'
        }),
        query (':enter', style({transform: 'translateY(100%)', opacity: 0})),
        query (':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0, opacity: 100})),
        group([
          query(':leave', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateY(-100%)'}))]),
          query(':enter', [animate('0.5s cubic-bezier(.35, 0, .25, .5)', style({transform:'translateY(0)'}))]),
        ])
      ]),
      transition('2=>1',[
        style({
          height: '!'
        }),
        query (':enter', style({transform:'translateY(-100%)'})),
        query (':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateY(100%)'}))]),
          query(':enter', [animate('0.5s cubic-bezier(.35, 0, .25, .5)', style({transform:'translateY(0)'}))]),
        ])
      ]),
      transition('2=>3, 2=>4, 1=>4, 3=>4, 1=>5, 2=>5, 3=>5, 4=>5', [
        style({
          height: '!'
        }),
        query (':enter', style({transform:'translateX(100%)'})),
        query (':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(-100%)'}))]),
          query(':enter', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(0)'}))]),
        ])

      ]),
      transition('3=>2, 3=>1, 4=>3, 4=>2, 4=>1, 5=>1, 5=>2, 5=>3, 5=>4, 1=>6, 2=>6, 3=>6, 4=>6, 5=>6, 6=>5, 6=>4, 6=>3, 6=>2, 6=>1',[
        style({
          height: '!'
        }),
        query (':enter', style({transform:'translateX(-100%)'})),
        query (':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(100%)'}))]),
          query(':enter', [animate('0.5s cubic-bezier(.35, 0, .25, 1)', style({transform:'translateX(0)'}))]),
        ])
      ]),
    ])
  ]
})
export class AppComponent {

  constructor(private route: ActivatedRoute, private jsonData: Data, private location: Location) {
  }

  goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }

  menu: any[] = [
    {
      title : "ALPHABET",
      url: "Chapters/Alphabet",
    },
    {
      title : "GRAMMAR",
      url: "Chapters/Grammar",

    },
    {
      title : "THEMATIC WORDS",
      url: "Chapters/Thematic",
    },
    {
      title : "DIALOGUES",
      url: "Chapters/Dialogue",
    },
    {
      title : "VOCABULARY",
      url: "Vocabulary",
    },
    {
      title : "RESOURCES",
      url: "Resources",
    }
  ];

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  menuBut() {
    let side = document.getElementById('side-1');
    let side1 = document.getElementById('side');
    let darken = document.querySelector('.darken');
    // tslint:disable-next-line:max-line-length
    if (side.className === 'example-container-mobile flex col-sm-12 col-md-12 col-12 row'
      || side.className === 'example-container-mobile none animated fadeOutRight col-sm-12 col-md-12 col-12 row'
      || side.className === 'example-container-mobile col-sm-12 col-md-12 col-12 row') {
      side.className = 'example-container-mobile flex animated fadeInLeft col-sm-12 col-md-12 col-12 row';
    } else if ( side.className = 'example-container-mobile flex animated fadeInLeft col-sm-12 col-md-12 col-12 row') {
      side.className = 'example-container-mobile none animated fadeOutRight col-sm-12 col-md-12 col-12 row';
    }
  }

  requesting: any;
  course_id: string = 'AL_102';
  lesson_id: string = 'Lesson_1';
  unit_name: string = 'AL_102-Lesson_1';
  item_name: string = 'Welcome';
  type: string = 'exercise';
  tipsArray: any = [];
  jsonTipsObject: any = {
    'tips': []
  };

  pageStatusData: any = {
    'submits_count': 0,
    'pageNumber': 0,
    'correct': 0,
    'incorrect': 0,
    'total': 0
  };
  statDateObjects: any = {'correct': 0, 'incorrect': 0};

  getTipsData() {

    this.jsonData.getTipsJson(this.course_id, this.lesson_id, this.item_name).subscribe(
      response => this.jsonTipsObject.tips = response);
    return;
  }

  getTipIds() {
    this.jsonData.getTipsId(this.unit_name, this.item_name).subscribe(response => {
      this.tipsArray = response;
      this.jsonData.showFirst(this.jsonTipsObject.tips, this.statDateObjects, response, this.unit_name, this.item_name);
      console.log(response);
    });
    return;
  }

  ngOnInit() {
    this.getTipsData();
    this.getTipIds();
  }
}
