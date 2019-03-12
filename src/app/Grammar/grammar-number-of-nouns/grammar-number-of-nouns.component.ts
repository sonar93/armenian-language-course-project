import { HttpModule } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { data } from "../../data.service";
import { Component, OnInit, NgModule } from "@angular/core";
import { Response } from "@angular/http";
import { ViewChild } from "@angular/core";
import { DragScroll, DragScrollModule } from "ngx-drag-scroll";
import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-grammar-number-of-nouns",
  templateUrl: "./grammar-number-of-nouns.component.html",
  styleUrls: ["./grammar-number-of-nouns.component.scss"]
})
export class GrammarNumberOfNounsComponent implements OnInit {
  constructor(private jsonData: data) {}
  jsonObject: any = {
    title: 'Grammar: "To be" in use',
    help:
      '<p>Listen how pronouns are used with the auxiliary verb "to be" (<i>լինել</i>) and practice.</p>',
    info:
      '<p><b style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;">Personal Pronouns</b></p><ul style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><li>Personal pronouns represent specific people or things.</li><li>Personal pronouns are:<br><div class="flex" style="display: flex; width: 155.412px; place-content: center space-between; align-items: center;"><div><ul id="Sing"><b>Singular</b><li><i>ես</i>-<b>I</b></li><li><i>դու</i>-<b>You</b></li><li><i>նա/ինքը</i>-<b>he/she/it</b></li></ul></div><div><ul id="Plur"><b>Plural</b><li><i>մենք</i>-<b>we</b></li><li><i>դուք</i>-<b>You</b></li><li><i>նրանք/իրենք</i>-<b>they</b></li></ul></div></div></li><li>These pronouns are defined according to person category. The first person defines the speaker (<i>ես</i>-I,<span>&nbsp;</span><i>մենք</i><span>&nbsp;</span>- we), second person defines the listener (<i>դու</i>-You (singular),<span>&nbsp;</span><i>դուք</i>–You (plural), third person defines other people (<i>նա/ինքը</i><span>&nbsp;</span>- he/she/it,<i>նրանք/իրենք</i><span>&nbsp;</span>-they).</li><br><li>Armenian personal pronouns do not distinguish gender in the third-person singular (as in the English he/she/it), but have two sets of pronouns in the third person. There are two ways to define the third person but getting ս, դ articles the pronoun can be used separately or along with the first and second person (<i>ինքս//ես ինքս-myself</i>,<span>&nbsp;</span><i>ինքդ//դու ինքդ-yourself</i>).<span>&nbsp;</span><i>Ինքս, ինքդ<span>&nbsp;</span></i>forms do not have cases, but the pronoun ինքը has cases.</li><br><li>To express respect and politeness the pronoun in second person is used in plural form even if it refers one person and is written with upper case. (e.g.<span>&nbsp;</span><i>Ես Ձեզ շնորհավորում եմ:</i><span>&nbsp;</span>I congratulate You).</li></ul><!--EndFragment--><p>   </p>',
    page: [
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/1.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/1_1.mp3"
              },
              text: "Ես",
              text_trans: "/Yes/ I"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/1_1.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/1.mp3"
              },
              text:
                '<p><font color="#e82a1f">Ես</font> ուսանող <font color="#e82a1f">եմ</font>:</p>',
              text_trans: "<p>/yes usanogh em/&nbsp;</p><p>I am a student.</p>"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/2.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/2_1.mp3"
              },
              text: "Դու",
              text_trans: "/Du/ You"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/1_2.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/2.mp3"
              },
              text:
                '<p><font color="#e82a1f">Դու</font> ուսանող <font color="#e82a1f">ես</font>:</p>',
              text_trans:
                "<p>/du usanogh es/&nbsp;</p><p>You are a student.</p>"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/3.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/3_1.mp3"
              },
              text: "Նա",
              text_trans: "/Na/ He/She"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/1_3.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/3.mp3"
              },
              text:
                '<p><font color="#e82a1f">Նա</font> ուսանող <font color="#e82a1f">է</font>:</p>',
              text_trans:
                "<p>/na usanohgh e/&nbsp;</p><p>He/she is a student.</p>"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/4.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/4_1.mp3"
              },
              text: "Մենք",
              text_trans: "/Menk/ We"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/2_1.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/4.mp3"
              },
              text:
                '<p><font color="#e82a1f">Մենք</font> ուսանող <font color="#e82a1f">ենք</font>:</p>',
              text_trans: "<p>/menk usanogh enk/</p><p> We are students.</p>"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/5.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/5_1.mp3"
              },
              text: "Դուք",
              text_trans: "/Duk/ You"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/2_2.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/5.mp3"
              },
              text:
                '<p><font color="#e82a1f">Դուք</font> ուսանող <font color="#e82a1f">եք</font>:</p>',
              text_trans:
                "<p>/duk usanogh ek/&nbsp;</p><p>You are students.</p>"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/6.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/6_1.mp3"
              },
              text: "Նրանք",
              text_trans: "/Nrank/ They"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/images/2_3.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/12/audio/6.mp3"
              },
              text:
                '<p><font color="#e82a1f">Նրանք</font> ուսանող <font color="#e82a1f">են</font>:</p>',
              text_trans:
                "<p>/nrank usanogh en/&nbsp;</p><p>They are students.</p>"
            }
          ]
        }
      }
    ]
  };

  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "12";
  type: string = "lesson";
  p: number = 1;
  audio: any;
  index: any;
  audioTag: any;
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
        //   console.log(response);
      });
    return;
  }
  */
  requesting: any;
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
    total: this.jsonObject.page.length * 2
  };
  pageList: any[] = new Array(this.statDateObjects.total);

  ngOnInit() {
    this.audioTag = document.createElement("audio");
    this.getData();
    //this.getTipsData();
    //this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = 0;

    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = [true, true];
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

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "12";
    // console.log("course_id =" + course_id);
    // console.log('kuku');
    //  this.jsonData.getJson(course_id,lesson_id,item_id).subscribe(responseAlp => this.alphabet = responseAlp);
    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    //    console.log(response);
    console.log(this.jsonObject);
    return this.jsonObject;
  }

  myindex() {
    let str = document.getElementsByClassName("current")[0].textContent;
    str = str.trim();
    const realindex = str.split("\n");
    this.index = parseInt(realindex[1]) - 1;
  }

  click(audio, id) {
    this.audioTag.setAttribute("src", audio.audio);
    this.myindex();
    this.audioTag.load();
    this.audioTag.play();
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length * 2;
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
