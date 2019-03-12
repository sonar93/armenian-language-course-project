import { Component, OnInit } from "@angular/core";
import { data } from "../../data.service";

@Component({
  selector: "app-grammar-personal-pronouns",
  templateUrl: "./grammar-personal-pronouns.component.html",
  styleUrls: ["./grammar-personal-pronouns.component.scss"]
})
export class GrammarPersonalPronounsComponent implements OnInit {
  p: number;
  audio: any;
  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "10";
  type: string = "lesson";
 /* jsonTipsObject: any = {
    tips: []
  };
  tipsArray: any = [];
*/
  requesting: any;
  index: any;
  audioTag: any;
  pageStatusData: any = {
    submits_count: 0,
    pageNumber: 0,
    correct: 0,
    incorrect: 0,
    total: 0
  };
  /*
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
  constructor(private jsonData: data) {}

  jsonObject: any = {
    title: "Grammar: Personal pronouns",
    help: "",
    info:
      '<p>  <!--StartFragment--><b style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">Personal Pronouns</b><span style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"></span></p><ul style="font-family: &quot;Times New Roman&quot;; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"><li style="color: rgb(0, 0, 0); font-weight: 400;">Personal pronouns represent specific people or things.</li><li style="color: rgb(0, 0, 0); font-weight: 400;">Personal pronouns are:<br><div class="flex" style="display: flex; width: 155.412px; place-content: center space-between; align-items: center;"><div><ul id="Sing"><b>Singular</b><li><i>ես</i>-<b>I</b></li><li><i>դու</i>-<b>you</b></li><li><i>նա/ինքը</i>-<b>he/she/it</b></li></ul></div><div><ul id="Plur"><b>Plural</b><li><i>մենք</i>-<b>we</b></li><li><i>դուք</i>-<b>you</b></li><li><i>նրանք/իրենք</i>-<b>they</b></li></ul></div></div></li><li style=""><font color="#000000">These pronouns are defined according to person category. The first person defines the speaker (</font><i style=""><b style=""><font color="#c10300">ես</font></b></i><font color="#000000">-I,</font><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><i style=""><b style=""><font color="#c10300">մենք</font></b></i><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><font color="#000000">- we), second person defines the listener (</font><i style=""><b style=""><font color="#c10300">դու</font></b></i><font color="#000000">-You (singular),</font><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><i style=""><b style=""><font color="#c10300">դուք</font></b></i><font color="#000000">–You (plural), third person defines other people (</font><i style=""><b style=""><font color="#c10300">նա/ինքը</font></b></i><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><font color="#000000">- he/she/it,</font><i style=""><b style=""><font color="#c10300">նրանք/իրենք</font></b></i><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><font color="#000000">-they).</font></li><br><li style=""><font color="#000000">Armenian personal pronouns do not distinguish gender in the third-person singular (as in the English he/she/it), but have two sets of pronouns in the third person. There are two ways to define the third person but getting ս, դ articles the pronoun can be used separately or along with the first and second person (</font><i style=""><b style=""><font color="#c10300">ինքս//ես ինքս</font></b><font color="#000000">-myself</font></i><font color="#000000">,</font><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><i style=""><font color="#c10300" style=""><b>ինքդ//դու ինքդ</b></font></i><i style="color: rgb(0, 0, 0); font-weight: 400;">-yourself</i><font color="#000000">).</font><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><i style="color: rgb(0, 0, 0); font-weight: 400;">Ինքս, ինքդ<span>&nbsp;</span></i><font color="#000000">forms do not have cases, but the pronoun ինքը has cases.</font></li><br><li style=""><font color="#000000">To express respect and politeness the pronoun in second person is used in plural form even if it refers one person and is written with upper case. (e.g.</font><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><i style=""><b style=""><font color="#c10300">Ես Ձեզ շնորհավորում եմ:</font></b></i><span style="color: rgb(0, 0, 0); font-weight: 400;">&nbsp;</span><font color="#000000">I congratulate You).</font></li></ul><!--EndFragment-->  <br><p></p>',
    page: [
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/images/1.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/audio/ես.mp3"
              },
              text: "ես",
              text_trans: "/yes/ I"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/images/2.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/audio/դու.mp3"
              },
              text: "դու",
              text_trans: "/du/ You"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/images/3.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/audio/na.mp3"
              },
              text: "նա",
              text_trans: "/na/ he/she/it"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/images/4.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/audio/մենք.mp3"
              },
              text: "մենք",
              text_trans: "/menk/ we"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/images/5.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/audio/դուք.mp3"
              },
              text: "դուք",
              text_trans: "/duk/ you"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/images/6.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/10/audio/նրանք.mp3"
              },
              text: "նրանք",
              text_trans: "/nrank/ they"
            }
          ]
        }
      }
    ]
  };

  ngOnInit() {
    this.audioTag = document.createElement("audio");
    this.getData();
  //  this.getTipsData();
  //  this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = 0;

    this.setStatistics();

    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = [true, true, true];
    }
  }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "10";
    // console.log("kuku2");
    // console.log("course_id =" + course_id);
    //console.log('kuku');

    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    //  console.log(this.jsonObject);
    return this.jsonObject;
  }

  statDateObjects: any = {
    correct: 0,
    incorrect: 0,
    total: this.jsonObject.page.length * 3
  };
  pageList: any[] = new Array(this.statDateObjects.total);
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
    const realindex = str.split("\n");
    this.index = parseInt(realindex[1]) - 1;
  }

  click(audio, id) {
    // let audioTag = document.createElement('audio');
    this.myindex();
    this.audioTag.setAttribute("src", audio.audio);
    this.audioTag.load();
    this.audioTag.play();
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
