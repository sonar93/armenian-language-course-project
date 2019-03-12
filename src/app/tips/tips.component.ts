import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import {data} from '../data.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public Data: data) { }

  ngOnInit() {
  }

}
