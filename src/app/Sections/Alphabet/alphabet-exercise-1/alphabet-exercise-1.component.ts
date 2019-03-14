import {Component, OnInit} from '@angular/core';
import {Data} from '../../../shared/data.service';
import {MatDialog} from '@angular/material';
import {TipsComponent} from '../../../shared/tips/tips.component';
declare var $;

@Component({
  selector: 'app-alphabet-exercise-1',
  templateUrl: './alphabet-exercise-1.component.html',
  styleUrls: ['./alphabet-exercise-1.component.scss']
})
export class AlphabetExercise1Component implements OnInit {

  [x: string]: any;

  pageIndex: any;
  currentSound: any = 0;
  playedLetter = '';
  mustPlay: any;
  submits_count: any;
  rightAudio: any = './assets/right.mp3';
  wrongAudio: any = './assets/wrong.mp3';
  audio: any;
  audioObj: any;

  course_id: string = 'AL_102';
  lesson_id: string = 'Lesson_1';
  unit_name: string = 'AL_102-Lesson_1';
  item_name: string = '3';
  type: string = 'exercise';
  tipId: any;
 /* jsonTipsObject: any = {
    tips: []
  };
  tipsArray: any = [];

  requesting: any;
*/
  jsonObject: any = {
    "title": "Exercise 1: Listen and select",
    "help": "<p>Listen and select the correct option.<br></p>",
    "info": "<p><span style=\"font-family: Sylfaen, serif; font-size: 12pt;\">Learning sounds in syllables develops understanding of the orthographic and phonologic structure of words, provides an excellent introduction to the structure of the Armenian language for reading and spelling. </style>",
    "right-audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/right.mp3",
    "wrong-audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/wrong.mp3",
    "page": [{
      "item": [{
        "answer": "գա",
        "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/գա.mp3",
        "options": {
          "text": ["ագ", "դա", "գա"]
        }
      }]
    }, {
      "item": [{
        "answer": "գու",
        "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/գու.mp3",
        "options": {
          "text": ["դու", "գու", "ուբ"]
        }
      }]
    }, {
      "item": [{
        "answer": "եգ",
        "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/եգ.mp3",
        "options": {
          "text": ["եգ", "դե", "դա"]
        }
      }]
    }, {
      "item": [{
        "answer": "գե",
        "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/գե.mp3",
        "options": {
          "text": ["դե", "լե", "գե"]
        }
      }]
    }, {
      "item": [{
        "answer": "աբ",
        "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/աբ.mp3",
        "options": {
          "text": ["դա", "ագ", "աբ"]
        }
      }]
    }, {
      "item": [{
        "answer": "ուգ",
        "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/3/audio/ուգ.mp3",
        "options": {
          "text": ["ագ", "ուգ", "գու"]
        }
      }]
    }]
  };
  pageStatusData: any = {
    'submits_count': 0,
    'pageNumber': 0,
    'correct': 0,
    'incorrect': 0,
    'total': 0
  };




  statDateObjects: any = {'correct': 0, 'incorrect': 0, 'total': 6};
  pageList: boolean[] = new Array(this.statDateObjects.total);

  constructor(private jsonData: Data, public dialog: MatDialog) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
    this.currentSound = new Array(this.jsonObject.page[0]);
    //  this.currentSound = this.shuffle(this.currentSound);

  }

/*

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
*/
  getData() {
    this.jsonData.getJson(this.course_id, this.lesson_id, this.item_name).subscribe(
      response => {this.jsonObject = response;
        this.mustPlay = new Array(this.jsonObject.page)[0];
        for (let i = 0; i < this.jsonObject.page.length; i++) {
          this.itemsArray[i] = this.mustPlay[i];
        }
        this.itemsArray = this.shuffle(this.itemsArray);
      });
    return;
  }

  setStatistics() {
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => console.log(response));
    return;
  }
  
  ngOnInit() {
    this.getData();
   // this.getTipIds();
   // this.getTipsData();

    //  this.setTip();
    this.audioTag = document.createElement('audio');
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = 6;
    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  myindex() {
    let str = document.getElementsByClassName('current')[0].textContent;
    let sl = str.slice(-24);
    this.realindex = sl.charAt(0);
    this.index = this.realindex - 1;
  }

  playAudio() {
    this.myindex();
    if (this.mustPlay.length > 0) {
      this.audioObj = this.mustPlay[this.index].item[0].audio_mp3;
      this.playedLetter = this.mustPlay[this.index].item[0].answer;
    }
    this.audio = new Audio(this.audioObj);
    this.audio.load();
    this.audio.play();
  }

  correct(choice, id) {
    this.myindex();
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    let divElement = document.getElementById(id);


    if (choice.trim() === id) {

      if (this.index < this.mustPlay.length) {
        divElement.style.borderColor = 'green';
        right.play();
        this.pageStatusData.submits_count++;
        this.pageStatusData.correct = 1;
        this.pageStatusData.incorrect = 0;
        this.pageStatusData.total = 6;
        //  console.log(this.index);
        //  console.log(this.pageList[this.index ]);

        if (this.pageList[this.index]) {
          this.pageList[this.index] = false;
          this.statDateObjects.correct++;
          this.setStatistics();
       //   this.jsonData.showTip(this.jsonTipsObject.tips, this.statDateObjects, this.tipsArray, this.unit_name, this.item_name);
        }

      }
    } else {
      divElement.style.borderColor = 'red';
      wrong.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 0;
      this.pageStatusData.incorrect = 1;
      this.pageStatusData.total = 6;
      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.incorrect++;
        this.setStatistics();
        
      }
      //   console.log(this.statDateObjects);
    }
  //  this.jsonData.showTip(this.jsonTipsObject.tips, this.statDateObjects, this.tipsArray, this.unit_name, this.item_name);
  }
}
