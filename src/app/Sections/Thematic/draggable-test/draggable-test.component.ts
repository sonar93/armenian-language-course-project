import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs/Subscription';
import {Data} from '../../data.service';

@Component({
  selector: 'app-draggable-test',
  templateUrl: './draggable-test.component.html',
  styleUrls: ['./draggable-test.component.scss']
})
export class DraggableTestComponent implements OnInit {
  msg = '';

  items = [

  ];


  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = '';
  mustPlay: any;
  p:any;
  notPlay: any;
  audio: any;
  audioObj: any;4;
  index: number = 0;
  itemsArray: any = [];
  rightAudio: any = './assets/right.mp3';
  wrongAudio: any = './assets/wrong.mp3';


  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "18";
  type: string = "exercise";

  pageStatusData: any = {
    "submits_count": 0,
    "pageNumber": 0,
    "correct": 0,
    "incorrect": 0,
    "total": 0
  };

  jsonObject: any = {
    "title": "Exercise 2: Match Expressions",
    "help":"Arrange the expressions in correct order to create a short dialogue.",
    "info":"Drag and drop responses in the second column to match expressions and build correct conversation. ",
    "image": "./assets/21/media/images/1.png",
    "imageBoy": "./assets/21/media/images/2.png",
    "page":
      [
        {
          "id" : 1,
          "text1" : "Քո անունը ի՞նչ է:",
          "text2" : "Իմ անունը Աննա է:",
          "absent-index": 1
        },
        {
          "id" : 2,
          "text1" : "Ինչպե՞ս ես:",
          "text2" : "Լավ եմ, շնորհակալություն:",
          "absent-index": 1

        },
        {
          "id" : 3,
          "text1" : "Ձեր անունը ի՞նչ է:",
          "text2" : "Իմ անունը Տիգրան է:",
          "absent-index": 1

        },
        {
          "id" : 4,
          "text1" : "Ինչպե՞ս եք:",
          "text2" : "Ես նույնպես լավ եմ:",
          "absent-index": 1
        }
      ]};

  constructor(private dragula: DragulaService, private jsonData: Data) {
    // let shuffled = this.shuffle();
    this.mustPlay = new Array(this.jsonObject.page)[0];
    for (let i = 0; i < this.mustPlay.length; i++) {
      this.itemsArray[i] = this.mustPlay[i];
    }
    this.itemsArray = this.shuffle(this.itemsArray);
  }
  subs = new Subscription();
  ngOnInit() {
    this.getData();

    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;

    this.setStatistics();
    for (let i=0; i<this.pageList.length; i++) {
      this.pageList[i] = true;
    }

    let body = document.getElementById('body');
    this.subs.add(this.dragula.drag().subscribe((value) => {
      body.style.overflowY = `hidden`
    }));


    this.subs.add(this.dragula.drop().subscribe(value => {
      body.style.overflowY = `auto`;
      this.correct();
      setTimeout(() => {
        this.msg = "";
      }, 1000);
    }));
  }

  ngAfterViewInit(){
    // this.myindex();
    this.audio = new Audio(this.audioObj);
    this.playedLetter = this.mustPlay[0].text2;
  }

getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "18";
    this.jsonData.getJson(course_id, lesson_id, item_id).subscribe(
      response => this.jsonObject = response);
    return this.jsonObject;
  }


  setStatistics() {
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => response);
    return;
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

  statDateObjects: any = {"correct": 0, "incorrect": 0, "total": this.jsonObject.page.length};
  pageList: boolean[] = new Array(this.statDateObjects.total);

  letters: any;
  playAudio(index) {
    this.audioObj = this.mustPlay[index-1].audio;
    //  this.letter = this.mustPlay[index-1].text2;
    //   console.log( this.letter);
    // console.log(this.mustPlay);
    this.audio.setAttribute('src', this.audioObj);
    this.audio.load();
    this.audio.play();
    //this.notPlay = true;
  }
  divElements: any = [];

  myindex() {
    let str = document.getElementsByClassName("current")[0].textContent;
    // let sl = str.slice(-24);
    // console.log(str);
    str = str.trim();
    let realindex = str.split('\n');
    //this.realindex = sl.charAt(0);
    this.index = parseInt(realindex[1]) - 1;
    //console.log(this.index)
  }

  correct() {
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    this.divElements = document.getElementById('items').children;
    this.letters = this.mustPlay;
    //console.log(this.divElements);
   // console.log(this.letters);
    for (let i = 0; i < this.divElements.length; i++) {


     // console.log(this.divElements[i].textContent);
     // console.log(this.letters[i].text2);
      if (this.divElements[i].textContent === this.letters[i].text2) {
        this.divElements[i].style.border = '3px solid green';
        this.divElements[i].style.background = 'white';
        this.divElements[i].style.color = 'green';
        right.play();

        this.pageStatusData.submits_count++;
        this.pageStatusData.correct = 1;
        this.pageStatusData.incorrect = 0;
        this.pageStatusData.total = this.jsonObject.page.length;
       // console.log(this.index);
        //console.log(this.pageList);

        if (this.pageList[i]) {
          this.pageList[i] = false;
          this.statDateObjects.correct++;
          this.setStatistics();
        }
        //setTimeout(this.jsonObject.page[p++], 3000);
      } else {


        this.divElements[i].style.border = '3px solid white';
        this.divElements[i].style.background = '';
        this.divElements[i].style.color = 'white';
        wrong.play();
      }
    }
  }


}
