import { Component, OnInit } from "@angular/core";
import { Data } from "../../data.service";

@Component({
  selector: "app-alphabet-exercise-7",
  templateUrl: "./alphabet-exercise-7.component.html",
  styleUrls: ["./alphabet-exercise-7.component.scss"]
})
export class AlphabetExercise7Component implements OnInit {
  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = "";
  mustPlay: any;
  letters: any;
  notPlay: any = true;
  rightAudio: any = "./assets/right.mp3";
  wrongAudio: any = "./assets/wrong.mp3";
  p: any;

  submits_count: any;

  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "9";
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
  constructor(private jsonData: Data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
    this.currentSound = new Array(this.jsonObject.page[0].item[0].audio_mp3);
    this.letters = new Array(this.jsonObject.page[0].item[0].options.item);
    this.playSound = Object.assign([], this.mustPlay);

    // this.mustPlay = this.shuffle(this.mustPlay);
    //this.letters = this.shuffle(this.letters);
  }

  ngOnInit() {
    this.getData();
  //  this.getTipsData();
  //  this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;

    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
  }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "9";

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
  ngAfterViewInit() {}

  jsonObject: any = {
    title: "Exercise 7: Insert the letter",
    help:
      "<p>Look at the picture and insert the correct letter to form the word.&nbsp;</p>",
    info:
      "<p>Practice the letters and improve your Vocabulary by building new words.<br><br><br></p>",
    "right-audio":
      "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/right.mp3",
    "wrong-audio":
      "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/wrong.mp3",
    page: [
      {
        item: [
          {
            answer: "տատ",
            text: "_ատ",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/10.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/1_1.jpg",
            options: {
              correct: "տ",
              item: [{ text: "ա" }, { text: "զ" }, { text: "տ" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "արև",
            text: "_րև",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/1.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/5_1.jpg",
            options: {
              correct: "ա",
              item: [{ text: "ո" }, { text: "գ" }, { text: "ա" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "ուտել",
            text: "_տել",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/8.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/6_1.jpg",
            options: {
              correct: "ու",
              item: [{ text: "ե" }, { text: "ու" }, { text: "զ" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "տղա",
            text: "_ղա",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/7.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/7_3.jpg",
            options: {
              correct: "տ",
              item: [{ text: "օ" }, { text: "տ" }, { text: "ր" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "րոպե",
            text: "_ոպե",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/3.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/8_1.jpg",
            options: {
              correct: "ր",
              item: [{ text: "ս" }, { text: "ու" }, { text: "ր" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "սառնարան",
            text: "_առնարան",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/11.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/9_1.jpg",
            options: {
              correct: "ս",
              item: [{ text: "լ" }, { text: "ս" }, { text: "ղ" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "ուսուցիչ",
            text: "_սուցիչ",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/4.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/10_3.jpg",
            options: {
              correct: "ու",
              item: [{ text: "վ" }, { text: "յ" }, { text: "ու" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "տուն",
            text: "_ուն",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/17.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/11_1.jpeg",
            options: {
              correct: "տ",
              item: [{ text: "գ" }, { text: "խ" }, { text: "տ" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "գիրք",
            text: "_իրք",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/5.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/11_1.jpg",
            options: {
              correct: "գ",
              item: [{ text: "մ" }, { text: "ֆ" }, { text: "գ" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "սեղան",
            text: "_եղան",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/9.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/3_1.jpg",
            options: {
              correct: "ս",
              item: [{ text: "պ" }, { text: "ս" }, { text: "ե" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "առավոտ",
            text: "_ռավոտ",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/6.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/2_1.jpg",
            options: {
              correct: "ա",
              item: [{ text: "գ" }, { text: "ա" }, { text: "բ" }]
            }
          }
        ]
      },
      {
        item: [
          {
            answer: "երեխա",
            text: "_րեխա",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/audio/12.mp3",
            image_file:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/9/images/4_1.jpg",
            options: {
              correct: "ե",
              item: [{ text: "պ" }, { text: "ե" }, { text: "հ" }]
            }
          }
        ]
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
    let audio;
    let audioObj;

    if (this.mustPlay.length > 0) {
      audioObj = this.mustPlay[this.index].item[0].audio_mp3;
      //  this.letter = this.mustPlay[index].num;
      this.playedLetter = this.mustPlay[this.index].item[0].options.answer;
    }
    audio = new Audio(audioObj);
    audio.load();
    audio.play();
  }

  correct(pageIndex, id) {
    this.myindex();
    if (!this.notPlay) {
      return;
    }
    let divElement = document.getElementById(id);
    let missed = document.getElementById("missed");
    let done = document.getElementById("done");
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    // console.log(id === this.playedLetter && divElement.style.background !== 'rgba(0,0,0,.4)');
    //console.log(divElement);
    //console.log(this.playedLetter);
    if (pageIndex === id && divElement.style.background !== "rgba(0,0,0,.4") {
      this.currentSound++;
      divElement.style.background = "green";
      missed.style.display = "none";
      done.style.display = "block";
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
    } else {
      this.currentSound = 0;
      divElement.style.background = "red";
      missed.style.display = "none";
      done.style.display = "block";

      wrong.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 0;
      this.pageStatusData.incorrect = 1;
      this.pageStatusData.total = this.jsonObject.page.length;
      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.incorrect++;
        this.setStatistics();
      }
    }
   /* this.jsonData.showTip(
      this.jsonTipsObject.tips,
      this.statDateObjects,
      this.tipsArray,
      this.unit_name,
      this.item_name
    );
    */
  }
}
