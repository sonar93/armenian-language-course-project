import { Component, OnInit } from "@angular/core";
import { DragulaService } from "ng2-dragula";
import { Subscription } from 'rxjs/Subscription';
import { Data } from "../../../shared/data.service";

@Component({
  selector: "app-alphabet-exercise-6",
  templateUrl: "./alphabet-exercise-6.component.html",
  styleUrls: ["./alphabet-exercise-6.component.scss"]
})
export class AlphabetExercise6Component implements OnInit {
  msg = "";

  items = [];

  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = "";
  mustPlay: any;
  p: any;
  notPlay: any;

  rightAudio: any = "./assets/right.mp3";
  wrongAudio: any = "./assets/wrong.mp3";

  submits_count: any;

  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "8";
  type: string = "exercise";
  /* jsonTipsObject: any = {
     tips: []
   };
   tipsArray: any = [];
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

  constructor(private dragula: DragulaService, private jsonData: Data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
  }
  subs = new Subscription();

  ngOnInit() {
    this.getData();
    //this.getTipsData();
    // this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;

    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
    let body = document.getElementById("body");
    this.subs.add(this.dragula.drag().subscribe((value) => {
      body.style.overflowY = `hidden`
    }));

    this.subs.add(this.dragula.drop().subscribe(value => {
      body.style.overflowY = `auto`;
      this.correct(this.pageIndex, this.playedLetter);

      setTimeout(() => {
        this.msg = "";
      }, 1000);
    }));

  }

  ngAfterViewInit() { }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "8";

    this.jsonData.getJson(course_id, lesson_id, item_id).subscribe(response => {
      this.jsonObject = response;
      this.mustPlay = new Array(this.jsonObject.page)[0];
      for (let i = 0; i < this.jsonObject.page.length; i++) {
        this.itemsArray[i] = this.mustPlay[i];
      }
      this.itemsArray = this.shuffle(this.itemsArray);
    });
    return;
  }
  setStatistics() {
    this.jsonData
      .submitStatus(
        this.unit_name,
        this.item_name,
        this.type,
        this.pageStatusData
      )
      .subscribe(response => response);
    return;
  }

  jsonObject: any = {
    title: "Exercise 6: Build the correct word",
    help:
      "Listen to the words pronounced and rearrange the letters to form the correct word.",
    info:
      "<p>This activity is designed to enhance your Vocabulary and improve your reading and writing skills.<br></p>",
    page: [
      {
        text: [{ part: "տ" }, { part: "ա" }, { part: "ղ" }],
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/images/1.jpg",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/audio/1.mp3",
        answer: "տղա"
      },
      {
        text: [{ part: "ա" }, { part: "և" }, { part: "ր" }],
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/images/2.jpg",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/audio/2.mp3",
        answer: "արև"
      },
      {
        text: [
          { part: "ե" },
          { part: "ե" },
          { part: "ր" },
          { part: "ա" },
          { part: "խ" }
        ],
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/images/3.jpg",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/audio/3.mp3",
        answer: "երեխա"
      },
      {
        text: [{ part: "ի" }, { part: "ր" }, { part: "ք" }, { part: "գ" }],
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/images/4.jpg",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/audio/4.mp3",
        answer: "գիրք"
      },
      {
        text: [{ part: "ու" }, { part: "ն" }, { part: "տ" }],
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/images/5.jpg",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/8/audio/5.mp3",
        answer: "տուն"
      }
    ]
  };

  pageStatusData: any = {
    submits_count: 0,
    pageNumber: 0,
    correct: 0,
    incorrect: 0,
    total: 0
  };

  statDateObjects: any = {
    correct: 0,
    incorrect: 0,
    total: this.jsonObject.page.length
  };
  pageList: boolean[] = new Array(this.statDateObjects.total);

  myindex() {
    let str = document.getElementsByClassName("current")[0].textContent;
    // let sl = str.slice(-24);
    // console.log(str);
    str = str.trim();
    let realindex = str.split("\n");
    //this.realindex = sl.charAt(0);
    this.index = parseInt(realindex[1]) - 1;
    //console.log(this.index)
  }

  letter: any;
  playAudio() {
    this.myindex();
    this.playedLetter = this.mustPlay[this.index].answer;
    let audio;
    let audioObj;
    if (this.mustPlay.length > 0) {
      //console.log("foo")
      audioObj = this.mustPlay[this.index].audio_mp3;
      //	console.log(this.mustPlay[this.index]);

      //console.log(this.playedLetter);
      //console.log(this.index);
    }
    audio = new Audio(audioObj);
    audio.load();
    audio.play();
    this.notPlay = true;
  }
  divElement: any = [];

  correct(pageIndex, id) {
    this.myindex();
    this.playedLetter = this.mustPlay[this.index].answer;
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    this.divElement = document.getElementById("result").children;
    let result = "";
    for (let i = 0; i < this.divElement.length; i++) {
      result += this.divElement[i].textContent;
    }
    let listItem = document.getElementsByClassName("item");

    //console.log(result);
    //console.log(this.playedLetter.trim());
    if (result === this.playedLetter.trim()) {
      for (let i = 0; i < this.divElement.length; i++) {
        this.divElement[i].style.border = "3px solid green";
        this.divElement[i].style.background = "white";
        this.divElement[i].style.color = "green";
        this.pageStatusData.submits_count++;
        this.pageStatusData.correct = 1;
        this.pageStatusData.incorrect = 0;
        this.pageStatusData.total = this.jsonObject.page.length;
        // console.log(this.index);
        //  console.log(this.pageList);

        if (this.pageList[this.index]) {
          this.pageList[this.index] = false;
          this.statDateObjects.correct++;
          this.setStatistics();
        }
        right.play();
      }

      //setTimeout(this.jsonObject.page[p++], 3000);
    } else {
      for (let i = 0; i < this.divElement.length; i++) {
        this.divElement[i].style.border = "3px solid white";
        this.divElement[i].style.background = "";
        this.divElement[i].style.color = "white";
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
