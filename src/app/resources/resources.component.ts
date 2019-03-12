import { Component, OnInit } from '@angular/core';

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
        'icon' : './assets/resources/pdf.png',
        'url': './assets/resources/Lesson 1 Grammar Auxiliary Verb in Present Tense.pdf',
        'title' : 'Lesson 1: Grammar Auxiliary Verb in Present Tense.pdf'
      },
      {
        'icon' : './assets/resources/pdf.png',
        'url': './assets/resources/Lesson 1 Grammar_Pronoun.pdf',
        'title' : 'Lesson 1: Grammar - Pronoun'
      },
      {
        'icon' : './assets/resources/mp3.png',
        'url': './assets/18/media/audio/dialog_.mp3',
        'title' : 'Dialogue'
      },
      {
        'icon' : './assets/resources/docx.png',
        'url': './assets/resources/Lesson 1 Dialogue.docx',
        'title' : 'Dialogue'
      }
    ]
  };

  constructor() { }
  ngOnInit() {
  }

}
