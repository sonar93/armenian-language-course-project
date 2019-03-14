import { Component, OnInit } from '@angular/core';
import { Data } from '../../data.service';
import { DragulaService } from "ng2-dragula";
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-dialogues-exercise-1',
  templateUrl: './dialogues-exercise-1.component.html',
  styleUrls: ['./dialogues-exercise-1.component.scss']
})
export class DialoguesExercise1Component implements OnInit {
  msg = '';

  items = [

  ];

  jsonObject: any = {
    'page':
      [
        {}, {}, {}
      ]
  };

  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = '';
  mustPlay: any;
  p:any;
  notPlay: any;
  audio: any;
  audioObj: any;
  index: number = 0;
  itemsArray: any = [];
  rightAudio: any = './assets/right.mp3';
  wrongAudio: any = './assets/wrong.mp3';

  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "21";
  type: string = "exercise";

  /*jsonTipsObject: any = {
    tips: []
  };
  tipsArray: any = [];

  requesting: any;

  getTipsData() {
    this.jsonData
      .getTipsJson(this.course_id, this.lesson_id, this.item_name)
      .subscribe(response => (this.jsonTipsObject.tips = response));
    return;
  }

  getTipIds() {
    this.jsonData
      .getTipsId(this.unit_name, this.item_name)
      .subscribe(response => {
        this.tipsArray = response;
        this.jsonData.showFirst(
          this.jsonTipsObject.tips,
          this.statDateObjects,
          response,
          this.unit_name,
          this.item_name
        );
        //console.log(response);
      });
    return;
  }
*/
  pageStatusData: any = {
    "submits_count": 0,
    "pageNumber": 0,
    "correct": 0,
    "incorrect": 0,
    "total": 0
  };

  constructor(private dragula: DragulaService, private jsonData: Data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
  }
  subs = new Subscription();
  ngOnInit() {
    this.getData();
  //  this.getTipsData();
   // this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;

    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
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
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => response);
    return;
  }

  statDateObjects: any = {"correct": 0, "incorrect": 0, "total": this.jsonObject.page.length};
  pageList: boolean[] = new Array(this.statDateObjects.total);

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

  letters: any;
  playAudio(index) {
    this.audioObj = this.mustPlay[index - 1].audio;
    this.audio = new Audio(this.audioObj);
    //console.log(this.audioObj);
    this.audio.load();
    this.audio.play();
    //this.notPlay = true;
  }
  divElements: any = [];


  correct() {
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    this.divElements = document.getElementById('items').children;
    this.letters = this.mustPlay;
   // console.log(this.divElements);
  //  console.log(this.letters);
    for (let i = 0; i < this.divElements.length; i++) {


        if (this.divElements[i].textContent === this.letters[i].text2) {
        this.divElements[i].style.border = '3px solid green';
        this.divElements[i].style.background = 'white';
        this.divElements[i].style.color = 'green';
        right.play();
        this.pageStatusData.submits_count++;
        this.pageStatusData.correct = 1;
        this.pageStatusData.incorrect = 0;
        this.pageStatusData.total = this.jsonObject.page.length;
      //  console.log(this.index);
      //  console.log(this.pageList);

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
    /*this.jsonData.showTip(
      this.jsonTipsObject.tips,
      this.statDateObjects,
      this.tipsArray,
      this.unit_name,
      this.item_name
    );
    */
  }
}
