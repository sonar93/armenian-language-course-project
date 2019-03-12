import { Component, OnInit } from "@angular/core";
import { data } from "../../data.service";

@Component({
  selector: "app-grammar-exercise-1",
  templateUrl: "./grammar-exercise-1.component.html",
  styleUrls: ["./grammar-exercise-1.component.scss"]
})
export class GrammarExercise1Component implements OnInit {
  constructor(private jsonData: data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
  }

  letter: any;
  realindex: any;
  jsonTipsObject: any = {
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
     //   console.log(response);
      });
    return;
  }

  jsonObject: any = {
    title: "Exercise 1: Type the pronoun",
    help: "<p>Listen and type the correct pronoun.</p>",
    info:
      "<p>Complete the exercise on the personal pronouns and click on the check button to see the correct answer. Before submitting the answer, click on the picture to listen to the pronoun. <br></p>",
    page: [
      {
        number: "1",
        answer: "ես",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/audio/ես.mp3",
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/images/1.jpg"
      },
      {
        number: "2",
        answer: "դու",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/audio/դու.mp3",
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/images/2.jpg"
      },
      {
        number: "3",
        answer: "նա",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/audio/na.mp3",
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/images/3.jpg"
      },
      {
        number: "4",
        answer: "մենք",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/audio/մենք.mp3",
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/images/4.jpg"
      },
      {
        number: "5",
        answer: "դուք",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/audio/դուք.mp3",
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/images/5.jpg"
      },
      {
        number: "6",
        answer: "նրանք",
        audio_mp3:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/audio/նրանք.mp3",
        image:
          "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/13/images/6.jpg"
      }
    ]
  };

  ngOnInit() {
    this.getData();
    this.getTipsData();
    this.getTipIds();
    this.check_status = 0;
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

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "13";

    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    return this.jsonObject;
  }

  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter: any = "";
  mustPlay: any;
  index: any;
  rightAudio: any = "./assets/right.mp3";
  wrongAudio: any = "./assets/wrong.mp3";

  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "13";
  type: string = "exercise";
  check_status:number = 0;

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

  myindex() {
    const str = document.getElementsByClassName("current")[0].textContent;
    const sl = str.slice(-24);
    this.realindex = sl.charAt(0);
    this.index = this.realindex - 1;
    //this.check_status = 0;
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

  playAudio() {
    this.myindex();
    
    let audio;
    let audioObj;
    let str = document.getElementsByClassName("current")[0].textContent;
    let sl = str.slice(-24);
    this.realindex = sl.charAt(0);
    this.index = this.realindex - 1;
    audioObj = this.jsonObject.page[this.index].audio_mp3;
    audio = new Audio(audioObj);
    //console.log(audio);
    audio.load();
    audio.play();
  }

  addAnswer(answer) {
    this.myindex();
  //  this.check_status = 0;
    this.right = new Audio(this.rightAudio);
    this.wrong = new Audio(this.wrongAudio);
    const input = <HTMLElement>document.getElementById("mat");
    if (
      answer === this.jsonObject.page[this.index].answer ||
      answer === this.jsonObject.page[this.index].answer.toUpperCase() ||
      answer ===
        this.jsonObject.page[this.index].answer.charAt(0).toUpperCase() +
          this.jsonObject.page[this.index].answer.slice(1)
    ) {
      input.style.color = "green";
      input.style.border = "3px solid green";
      input.style.background = "white";
      this.right.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 1;
      this.pageStatusData.incorrect = 0;
      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.correct++;
        this.setStatistics();
      }
    } else if (answer !== this.jsonObject.page[this.index].answer) {
      //this.check_status=0;
      //console.log(this.check_status);
      this.wrong.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 0;
      this.pageStatusData.incorrect = 1;
      this.pageStatusData.total = 6;
      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.incorrect++;
        this.setStatistics();
        this.check_status=0;
      }
      this.check_status++;
      
			if (this.check_status === 3) {
        console.log(this.check_status)
        const ans = document.getElementById("answer");
        ans.style.display = "flex";
        input.style.color = "red";
        input.style.border = "3px solid red";
        input.style.background = "white";
        answer = this.jsonObject.page[this.index].answer;
      }
    }
    

    this.jsonData.showTip(
      this.jsonTipsObject.tips,
      this.statDateObjects,
      this.tipsArray,
      this.unit_name,
      this.item_name
    );
  }
}
