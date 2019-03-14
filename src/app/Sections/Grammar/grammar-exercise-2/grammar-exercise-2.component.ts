import { Component, ElementRef, OnInit } from "@angular/core";
import { Data } from "../../data.service";

@Component({
  selector: "app-grammar-exercise-2",
  templateUrl: "./grammar-exercise-2.component.html",
  styleUrls: ["./grammar-exercise-2.component.scss"]
})
export class GrammarExercise2Component implements OnInit {
  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter: any = "";
  mustPlay: any;

  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "14";
  type: string = "exercise";
  divElement: any;
  letter: any;
  index: any;
  realindex: any;
 /* jsonTipsObject: any = {
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
  jsonObject: any = {
    title: "Exercise 2: Select the correct option",
    help: "<p>Select the right pronoun and auxiliary verb.</p>",
    info:
      "<p>Complete the following exercise using pronouns and the corresponding form of the verb “to be”. This exercise will improve your Vocabulary, sentence structure and grammar.<br></p>",
    page: [
      {
        audio:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/14/audio/1.mp3",
        item: [
          { text: "ես եմ" },
          { text: "ես են" },
          { text: "ես է" },
          { text: "ես ենք" }
        ],
        text_answer: "ես եմ"
      },
      {
        audio:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/14/audio/2.mp3",
        item: [
          { text: "նա է" },
          { text: "նա ենք" },
          { text: "նա եք" },
          { text: "նա են" }
        ],
        text_answer: "նա է"
      },
      {
        audio:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/14/audio/3.mp3",
        item: [
          { text: "մենք է" },
          { text: "մենք եք" },
          { text: "մենք ենք" },
          { text: "մենք եմ" }
        ],
        text_answer: "մենք ենք"
      },
      {
        audio:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/14/audio/4.mp3",
        item: [
          { text: "դու ես" },
          { text: "դու ենք" },
          { text: "դու եք" },
          { text: "դու են" }
        ],
        text_answer: "դու ես"
      },
      {
        audio:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/14/audio/5.mp3",
        item: [
          { text: "նրանք եմ" },
          { text: "նրանք են" },
          { text: "նրանք է" },
          { text: "նրանք ես" }
        ],
        text_answer: "նրանք են"
      },
      {
        audio:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/14/audio/6.mp3",
        item: [
          { text: "դուք եք" },
          { text: "դուք են" },
          { text: "դուք ես" },
          { text: "դուք ենք" }
        ],
        text_answer: "դուք եք"
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
  // notesData: any = {"notes": [{"Title": "Take a note ..."}, {"Title": "Take a note ..."}, {"Title": "Take a note ..."}]};
  statDateObjects: any = {
    correct: 0,
    incorrect: 0,
    total: this.jsonObject.page.length
  };
  pageList: boolean[] = new Array(this.statDateObjects.total);

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "14";

    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    return this.jsonObject;
  }

  p: any;
  constructor(private jsonData: Data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
  }

  ngOnInit() {
    
    this.mustPlay = new Array(this.jsonObject.page)[0];
    
    this.getData();
    //this.getTipsData();
    //this.getTipIds();
    this.notPlay = false;
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;

    this.setStatistics();

    //this.getNotesData();

    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
  }

  setStatistics() {
    this.jsonData
      .submitStatus(
        this.unit_name,
        this.item_name,
        this.type,
        this.pageStatusData
      )
      .subscribe(response => console.log(response));
    return;
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  playAudio() {
    let audio;
    let audioObj;
    let str = document.getElementsByClassName("current")[0].textContent;
    let sl = str.slice(-24);
    this.realindex = sl.charAt(0);
    this.index = this.realindex - 1;
    //console.log(this.index);
    if (this.mustPlay.length > 0) {
      audioObj = this.jsonObject.page[this.index].audio;
      this.playedLetter = this.jsonObject.page[this.index].text_answer;
    }
    audio = new Audio(audioObj);
    audio.load();
    audio.play();
  }

  correct(pageIndex, id) {
    this.playAudio();
    this.divElement = document.getElementById(id);
    // console.log(id === this.playedLetter && divElement.style.background !== 'rgba(0,0,0,.4)');
    if (
      this.playedLetter === id &&
      this.divElement.style.background !== "rgba(0,0,0,.4)"
    ) {
      if (this.currentSound <= this.mustPlay.length) {
        this.currentSound++;
        this.divElement.style.background = "rgba(255,255,255,1)";
        this.divElement.style.color = "green";
        this.divElement.style.border = "2px solid green";
      }
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 1;
      this.pageStatusData.incorrect = 0;
      //console.log(this.index);
     // console.log(this.pageList[this.index]);

      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.correct++;
        this.setStatistics();
      }
    } else {
      this.divElement.style.background = "rgba(255,255,255,1)";
      this.divElement.style.color = "red";
      this.divElement.style.border = "2px solid red";
      this.currentSound = 0;
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 0;
      this.pageStatusData.incorrect = 1;
      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.incorrect++;
        this.setStatistics();
      }
    }
    /*
    this.jsonData.showTip(
      this.jsonTipsObject.tips,
      this.statDateObjects,
      this.tipsArray,
      this.unit_name,
      this.item_name
    );
    */
  }
}
