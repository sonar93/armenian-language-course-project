import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  title = "app";
 
  constructor() { }

  ngOnInit() {
  }

  
}
