import { Component, OnInit, ElementRef, NgModule } from "@angular/core";
import { Data } from "../../../shared/data.service";

@Component({
  selector: "app-alphabet-l1",
  templateUrl: "./alphabet-l1.component.html",
  styleUrls: ["./alphabet-l1.component.scss"]
})
export class AlphabetL1Component implements OnInit {
  constructor(private elementRef: ElementRef, private jsonData: Data) {}
  //alphabet: any = {};

  p: any;
  audioTag: any;
  [x: string]: any;

  pageIndex: any;
  currentSound: any = 0;
  playedLetter = "";
  mustPlay: any;
  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "1";
  type: string = "lesson";
  jsonTipsObject: any = {
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
       // console.log(response);
      });
    return;
  }

  alphabet: any = {
    title: "Alphabet: Sound and letter",
    help:
      '<p>  <!--StartFragment--><span style="color: rgb(17, 17, 17); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Listen and practice.</span><!--EndFragment--></p>',
    info:
      '<p><span style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;">The Armenian Alphabet was created in the 5th century by famous scholar and translator <b>Mesrop Mashtots</b> (404-406). The alphabet is composed as a prayer, beginning with A as Astvats (=God) and ending with K\' as K\' ristos (=Christ). The original alphabet had only 36 letters. Later, three more characters were added </span><span style="font-family: &quot;Times New Roman&quot;; font-size: medium;"><font color="#c10300"><b>O </b></font></span><span style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;">[o], </span><span style="font-family: &quot;Times New Roman&quot;; font-size: medium;"><font color="#c10300"><b>Ֆ</b></font></span><span style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"> [f] and </span><span style="font-family: &quot;Times New Roman&quot;; font-size: medium;"><font color="#c10300"><b>և</b></font></span><span style="color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;; font-size: medium;"> (yev).</span><br></p><!--EndFragment--><p>  <br></p><p></p>',
    page: [
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/a_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/a.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/a.mp4",
              text: "Ա ա",
              text_trans: "/a/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/1.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/1.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/1.mp4",
              text: "արև",
              text_trans: "/arev/ sun"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/a_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/a.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/a.mp4",
              text: "Ա ա",
              text_trans: "/a/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/2.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/2.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/2.mp4",
              text: "առավոտ",
              text_trans: "/aravot/ morning"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/a_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/a.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/a.mp4",
              text: "Ա ա",
              text_trans: "/a/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/3.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/3.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/3.mp4",
              text: "անուն",
              text_trans: "/anun/ name"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/u_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/ու.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/u_.mp4",
              text: "Ու ու",
              text_trans: "/u/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/4.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/4.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/4.mp4",
              text: "ուսուցիչ",
              text_trans: "/usutsich/ teacher"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/u_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/ու.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/u_.mp4",
              text: "Ու ու",
              text_trans: "/u/ "
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/5.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/5.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/5.mp4",
              text: "ուրախ",
              text_trans: "/urakh/ glad"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/u_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/ու.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/u_.mp4",
              text: "Ու ու",
              text_trans: "/u/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/6.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/6.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/6.mp4",
              text: "ուտել",
              text_trans: "/utel/ to eat"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/s_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/s.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/s.mp4",
              text: "Ս ս",
              text_trans: "/s/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/7.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/7.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/7.mp4",
              text: "սենյակ",
              text_trans: "/senyak/ room"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/s_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/s.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/s.mp4",
              text: "Ս ս",
              text_trans: "/s/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/8.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/8.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/8.mp4",
              text: "սեղան",
              text_trans: "/seghan/ table"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/s_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/s.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/s.mp4",
              text: "Ս ս",
              text_trans: "/s/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/9.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/9.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/9.mp4",
              text: "սառնարան",
              text_trans: "/sarnaran/ fridge"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/r_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/r.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/r.mp4",
              text: "Ր ր",
              text_trans: "/r/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/10.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/10.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/10.mp4",
              text: "րոպե",
              text_trans: "/rope/ minute"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/r_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/r.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/r.mp4",
              text: "Ր ր",
              text_trans: "/r/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/11.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/11.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/11.mp4",
              text: "երեխա",
              text_trans: "/yerekha/ child"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/r_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/r.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/r.mp4",
              text: "Ր ր",
              text_trans: "/r/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/12.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/12.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/12.mp4",
              text: "գիրք",
              text_trans: "/girk/ book"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/t_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/t.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/t.mp4",
              text: "Տ տ",
              text_trans: "/t/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/13.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/13.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/13.mp4",
              text: "տուն",
              text_trans: "/tun/ house"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/t_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/t.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/t.mp4",
              text: "Տ տ",
              text_trans: "/t/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/14.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/14.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/14.mp4",
              text: "տղա",
              text_trans: "/tgha/ boy"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/t_.png",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/t.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/t.mp4",
              text: "Տ տ",
              text_trans: "/t/"
            },
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/images/15.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/audio/15.mp3"
              },
              video:
                "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/1/video/15.mp4",
              text: "տատ",
              text_trans: "/tat/ grandmother"
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
    total: this.alphabet.page.length * 2
  };
  pageList: any[] = new Array(this.statDateObjects.total);

  ngOnInit() {
    this.audioTag = document.createElement("audio");
    this.getData();
    this.getTipsData();
    this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.alphabet.page.length;

    this.setStatistics();

    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = [true, true];
    }
  }
  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "1";

    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.alphabet = response));
    return this.alphabet;
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

  playvid() {
    let img = document.getElementById("opt-img");
    let vid = document.getElementById("opt-vid");
    // let vid = document.getElementById('video-1');
    if (img.style.display == "none") {
      img.style.display = "flex";
      vid.style.display = "none";
    } else {
      img.style.display = "none";
      vid.style.display = "flex";
    }
  }
  myindex() {
    let str = document.getElementsByClassName("current")[0].textContent;
    str = str.trim();
    let realindex = str.split("\n");
    this.index = parseInt(realindex[1]) - 1;
  }
  click(audio, id) {
    // audioTag = document.createElement('audio');
    this.audioTag.setAttribute("src", audio.audio);
    this.audioTag.load();
    this.audioTag.play();
    this.myindex();
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.alphabet.page.length * 2;
    if (this.pageList[this.index][id]) {
      this.pageList[this.index][id] = false;
      this.statDateObjects.correct++;
      this.setStatistics();
    }
    this.jsonData.showTip(
      this.jsonTipsObject.tips,
      this.statDateObjects,
      this.tipsArray,
      this.unit_name,
      this.item_name
    );
    // console.log(this.alphabet)
  }

  textHover(i) {
    let text;
    let trans;
    text = document.getElementById("img-text_" + i);
    trans = document.getElementById("img-trans_" + i);
    text.style.display = "none";
    trans.style.display = "block";
    console.log(this.alphabet.info);
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
