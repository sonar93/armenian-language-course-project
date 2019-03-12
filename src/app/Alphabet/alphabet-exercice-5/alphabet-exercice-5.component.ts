import { Component, OnInit } from "@angular/core";
import { data } from "../../data.service";

@Component({
  selector: "app-alphabet-exercice-5",
  templateUrl: "./alphabet-exercice-5.component.html",
  styleUrls: ["./alphabet-exercice-5.component.scss"]
})
export class AlphabetExercice5Component implements OnInit {
  [x: string]: any;
  p: number;
  audio: any;
  audioTag: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = "";
  mustPlay: any;
  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "7";
  type: string = "lesson";
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
  jsonObject: any = {
    title: "Exercise 5: Listen and repeat words.",
    help:
      "<p>Listen to the words pronounced and repeat them to improve your Armenian pronunciation.</p>",
    info:
      "<p>A good way to learn vocabulary is to see, hear and pronounce the new words. Practice this activity with a picture to understand the meaning of the word, recognize it when you hear or read it, and to be able to pronounce and write it.<br></p>",
    page: [
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/1.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/1.mp3"
              },
              text: "արև",
              text_trans: "/arev/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/2.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/2.mp3"
              },
              text: "առավոտ",
              text_trans: "/aravot/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/3.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/3.mp3"
              },
              text: "անուն",
              text_trans: "/anun/"
            }
          ]
        }
      },
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/4.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/4.mp3"
              },
              text: "ուսուցիչ",
              text_trans: "/usutsitch/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/5.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/5.mp3"
              },
              text: "ուրախ",
              text_trans: "/urakh/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/6.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/6.mp3"
              },
              text: "ուտել",
              text_trans: "/utel/"
            }
          ]
        }
      },
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/7.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/7.mp3"
              },
              text: "սենյակ",
              text_trans: "/senyak/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/8.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/8.mp3"
              },
              text: "սեղան",
              text_trans: "/seghan/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/9.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/9.mp3"
              },
              text: "սառնարան",
              text_trans: "/sarnaran/"
            }
          ]
        }
      },
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/10.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/10.mp3"
              },
              text: "րոպե",
              text_trans: "/rope/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/11.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/11.mp3"
              },
              text: "երեխա",
              text_trans: "/yerekha/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/12.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/12.mp3"
              },
              text: "գիրք",
              text_trans: "/girk/"
            }
          ]
        }
      },
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/13.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/13.mp3"
              },
              text: "տուն",
              text_trans: "/tun/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/14.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/14.mp3"
              },
              text: "տղա",
              text_trans: "/tgha/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/images/15.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/7/audio/15.mp3"
              },
              text: "տատ",
              text_trans: "/tat/"
            }
          ]
        }
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
    total: this.jsonObject.page.length * 3
  };
  pageList: any[] = new Array(this.statDateObjects.total);

  constructor(private jsonData: data) {}

  ngOnInit() {
    this.audioTag = document.createElement("audio");
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;
    this.setStatistics();
    this.getData();
  //  this.getTipsData();
   // this.getTipIds();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = [true, true, true];
    }
  }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "7";
    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    return this.jsonObject;
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

  myindex() {
    let str = document.getElementsByClassName("current")[0].textContent;
    str = str.trim();
    let realindex = str.split("\n");
    this.index = parseInt(realindex[1]) - 1;
  }

  click(audio, id) {
    // let audioTag = document.createElement('audio');
    this.audioTag.setAttribute("src", audio.audio);
    this.audioTag.load();
    this.audioTag.play();
    this.myindex();
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length * 3;
    if (this.pageList[this.index][id]) {
      this.pageList[this.index][id] = false;
      this.statDateObjects.correct++;
      this.setStatistics();
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

  textHover(i) {
    let text;
    let trans;
    text = document.getElementById("img-text_" + i);
    trans = document.getElementById("img-trans_" + i);
    text.style.display = "none";
    trans.style.display = "block";
  }

  transHover(i) {
    let text;
    let trans;
    text = document.getElementById("img-text_" + i);
    trans = document.getElementById("img-trans_" + i);
    text.style.display = "block";
    trans.style.display = "none";
  }
}
