import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  animations: [
    trigger('colorPicker', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('200ms')),
      transition('hidden => shown', animate('200ms')),
    ])
  ]
})
export class SwitcherComponent implements OnInit {
  state: string = 'hidden'
  blue(){
    var body = document.getElementById('body');
    body.className = 'blue';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-blue mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  green(){
    var body = document.getElementById('body');
    body.className = 'green';
    var side = document.getElementById('side');
    side.className = 'example-sidenav mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  gold(){
    var body = document.getElementById('body');
    body.className = 'gold';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-gold mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  yellow(){
    var body = document.getElementById('body');
    body.className = 'yellow';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-yellow mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  pink(){
    var body = document.getElementById('body');
    body.className = 'pink';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-pink mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  purple(){
    var body = document.getElementById('body');
    body.className = 'purple';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-purple mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  dpurple(){
    var body = document.getElementById('body');
    body.className = 'deep-purple';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-deep-purple mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  black(){
    var body = document.getElementById('body');
    body.className = 'black';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-black mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  greener(){
    var body = document.getElementById('body');
    body.className = 'greener';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-green mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }

  brown(){
    var body = document.getElementById('body');
    body.className = 'brown';
    var side = document.getElementById('side');
    side.className = 'example-sidenav-brown mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform mat-drawer-over';
  }



  /*showicons(){

      var switching = document.getElementById('switch');

      this.state = (this.state === 'shown' ? 'hidden' : 'shown');


  }*/



  constructor() { }

  ngOnInit() {
  }

}
