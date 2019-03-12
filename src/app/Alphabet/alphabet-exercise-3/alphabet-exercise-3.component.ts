import { Component, OnInit } from "@angular/core";
import { data } from "../../data.service";

@Component({
  selector: "app-alphabet-exercise-3",
  templateUrl: "./alphabet-exercise-3.component.html",
  styleUrls: ["./alphabet-exercise-3.component.scss"]
})
export class AlphabetExercise3Component implements OnInit {
  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = "";
  title = "EXERCISE 1";
  mustPlay: any;
  playSound: any;
  lettersArray: any = [];
  rightAudio: any = "./assets/right.mp3";
  wrongAudio: any = "./assets/wrong.mp3";

  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "5";
  type: string = "exercise";
  /*jsonTipsObject: any = {
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
  constructor(private jsonData: data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
    this.playSound = Object.assign([],this.mustPlay);

          this.mustPlay = this.shuffle(this.mustPlay);
          this.playSound = this.shuffle(this.playSound);

  }

  pageStatusData: any = {
    submits_count: 0,
    pageNumber: 0,
    correct: 0,
    incorrect: 0,
    total: 0
  };

  ngOnInit() {
    //this.shuffle()

    for (let j = 0; j < this.jsonObject.page.length; j++) {
      this.lettersArray.push(this.jsonObject.page[j].textUpperCase);
      this.lettersArray.push(this.jsonObject.page[j].textLowerCase);
    }
    this.shuffle(this.lettersArray);
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;
  //  this.getTipsData();
   // this.getTipIds();
    this.setStatistics();

    this.getData();

    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
  }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "5";
    // console.log("kuku2");
    // console.log("course_id =" + course_id);
    // console.log('kuku');
    //  this.jsonData.getJson(course_id,lesson_id,item_id).subscribe(responseAlp => this.alphabet = responseAlp);
    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    //    console.log(response);
    //  console.log(this.jsonObject);
    return this.jsonObject;
  }

  jsonObject: any = {
    title: "Exercise 3: Match upper and lower case letters",
    help: "Listen and choose the right option",
    info: "",
    "right-audio": "media/audio/right.mp3",
    "wrong-audio": "media/audio/wrong.mp3",
    page: [
      {
        audio_file: "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/5/audio/ա.mp3",
        textUpperCase: "Ա",
        textLowerCase: "ա"
      },
      {
        audio_file: "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/5/audio/ս.mp3",
        textUpperCase: "Ս",
        textLowerCase: "ս"
      },
      {
        audio_file: "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/5/audio/ր.mp3",
        textUpperCase: "Ր",
        textLowerCase: "ր"
      },
      {
        audio_file: "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/5/audio/ու.mp3",
        textUpperCase: "ՈՒ",
        textLowerCase: "ու"
      },
      {
        audio_file: "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/5/audio/տ.mp3",
        textUpperCase: "Տ",
        textLowerCase: "տ"
      }
    ]
  };
  statDateObjects: any = {
    correct: 0,
    incorrect: 0,
    total: this.jsonObject.page.length
  };
  pageList: boolean[] = new Array(this.statDateObjects.total * 2);
  firstSel: any = null;
  firstId: any;

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
  letter: any;

  playAudio() {
    let audio;
    let audioObj;
    const index = this.currentSound;
    if (this.mustPlay.length > 0) {
      audioObj = this.playSound[index].audio_file;
      this.playedLetter = this.playSound[index].text;
    }
    audio = new Audio(audioObj);
    audio.load();
    audio.play();
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

  correct(letter, id) {
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    if (document.getElementById(id).style.background === "white") {
      return;
    }
    if (this.firstSel === null && this.pageList[id]) {
      this.firstSel = letter;
      this.firstId = id;
      document.getElementById(id).style.background = "white";
      document.getElementById(id).style.color = "teal";
      
    } else {
      if (
        this.pageList[id] &&
        this.pageList[this.firstId] &&
        this.firstSel !== letter &&
        (this.firstSel === letter.toUpperCase() ||
          this.firstSel === letter.toLowerCase())
      ) {
        document.getElementById(id).style.background = "green";
        document.getElementById(id).style.color = "white";
        document.getElementById(this.firstId).style.background = "green";
        document.getElementById(this.firstId).style.color = "white";
        this.firstSel = null;
        right.play();
      //  this.playAudio();
      //  setTimeout(this.playAudio(), 1000);
        this.pageStatusData.submits_count++;
        this.pageStatusData.correct = 1;
        this.pageStatusData.incorrect = 0;

        if (this.pageList[id] && this.pageList[this.firstId]) {
          this.pageList[id] = false;
          this.pageList[this.firstId] = false;

          this.statDateObjects.correct++;
          this.setStatistics();
        }
      } else {
        wrong.play();
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
