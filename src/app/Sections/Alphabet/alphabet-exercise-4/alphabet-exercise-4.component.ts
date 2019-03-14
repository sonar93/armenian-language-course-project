import { Component, OnInit } from "@angular/core";
import { Data } from "../../../shared/data.service";

@Component({
  selector: "app-alphabet-exercise-4",
  templateUrl: "./alphabet-exercise-4.component.html",
  styleUrls: ["./alphabet-exercise-4.component.scss"]
})
export class AlphabetExercise4Component implements OnInit {
  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = "";
  mustPlay: any;
  p: any;
  rightAudio: any = "./assets/right.mp3";
  wrongAudio: any = "./assets/wrong.mp3";
  notPlay: any;

  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "6";
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
    // this.currentSound = new Array(this.jsonObject.page[0].item.audio_mp3);

    // this.currentSound = this.shuffle(this.currentSound);
  }

  ngOnInit() {
    this.getData();
    //this.getTipsData();
    //this.getTipIds();
    this.notPlay = false;
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = 15;

    this.setStatistics();

    //this.getNotesData();

    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
  }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "6";

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

  jsonObject: any = {
    title: "Exercise 4: Select the correct image",
    help:
      "<p>Listen to the words pronounced and click to select the correct picture.</p>",
    info:
      "<p>This activity is designed to improve your Vocabulary and spelling abilities. </p>",
    "right-audio":
      "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/right.mp3",
    "wrong-audio":
      "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/wrong.mp3",
    page: [
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/1.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/1.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/1.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/2.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/3.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/2.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/2.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/2.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/5.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/1.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/3.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/3.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/7.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/3.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/5.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/4.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/4.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/4.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/3.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/2.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/5.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/5.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/5.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/4.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/7.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/6.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/6.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/6.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/2.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/8.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/7.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/7.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/7.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/9.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/4.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/8.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/8.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/8.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/1.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/6.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/9.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/9.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/9.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/7.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/5.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/10.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/10.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/10.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/9.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/3.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/11.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/11.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/11.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/8.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/5.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/12.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/12.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/12.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/9.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/10.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/13.jpeg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/13.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/1.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/13.jpeg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/8.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/14.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/14.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/9.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/14.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/7.jpg"
              ]
            }
          }
        ]
      },
      {
        item: [
          {
            answer:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/15.jpg",
            audio_mp3:
              "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/audio/15.mp3",
            options: {
              image: [
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/15.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/10.jpg",
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/6/images/2.jpg"
              ]
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
  // notesData: any = {"notes": [{"Title": "Take a note ..."}, {"Title": "Take a note ..."}, {"Title": "Take a note ..."}]};
  statDateObjects: any = {
    correct: 0,
    incorrect: 0,
    total: this.jsonObject.page.length
  };
  pageList: boolean[] = new Array(this.statDateObjects.total);

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

  /*shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }*/

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
      //console.log("foo")
      audioObj = this.mustPlay[this.index].item[0].audio_mp3;
      this.playedLetter = this.mustPlay[this.index].item[0].answer;
      //console.log(this.playedLetter);
      //console.log(this.index);
    }
    audio = new Audio(audioObj);
    audio.load();
    audio.play();
    this.notPlay = true;
  }

  correct(pageIndex, id) {
    this.myindex();
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    if (!this.notPlay) {
      return;
    }
    let divElement = document.getElementById(id);
    // console.log(id);
    // console.log(pageIndex);
    if (
      pageIndex.trim() === id.trim() &&
      divElement.style.background !== "rgba(0,0,0,.4)"
    ) {
      divElement.style.background = "green";
      right.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 1;
      this.pageStatusData.incorrect = 0;
      //console.log(this.index);
      //console.log(this.pageList[this.index]);

      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.correct++;
        this.setStatistics();
      }
      //setTimeout(this.jsonObject.page[p++], 3000);
    } else {
      divElement.style.background = "red";
      wrong.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 0;
      this.pageStatusData.incorrect = 1;
      this.pageStatusData.total = 15;
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
