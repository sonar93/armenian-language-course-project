import { Component, OnInit } from '@angular/core';
import {Data} from '../../shared/data.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  jsonObject: any = {
    'title' : 'Resources',
    'help' : '',
    'info' : '',
    'page' : [
      {
        'icon' : './assets/Resources/pdf.png',
        'url': './assets/Resources/Lesson 1 Grammar Auxiliary Verb in Present Tense.pdf',
        'title' : 'Lesson 1: Grammar Auxiliary Verb in Present Tense.pdf'
      },
      {
        'icon' : './assets/Resources/pdf.png',
        'url': './assets/Resources/Lesson 1 Grammar_Pronoun.pdf',
        'title' : 'Lesson 1: Grammar - Pronoun'
      },
      {
        'icon' : './assets/Resources/mp3.png',
        'url': './assets/18/media/audio/dialog_.mp3',
        'title' : 'Dialogue'
      },
      {
        'icon' : './assets/Resources/docx.png',
        'url': './assets/Resources/Lesson 1 Dialogue.docx',
        'title' : 'Dialogue'
      }
    ]
  };

  constructor(private jsonData: Data) { }
  ngOnInit() {
    this.getData();
  }

  getData() {
    const course_id = 'AL_102';
    const lesson_id = 'Lesson_1';
    const item_id = '29';
    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    return this.jsonObject;
  }

}
