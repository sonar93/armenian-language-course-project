import { Component, OnInit } from "@angular/core";
import { data } from "../../data.service";

@Component({
  selector: "app-thematic-words-and-greetings",
  templateUrl: "./thematic-words-and-greetings.component.html",
  styleUrls: ["./thematic-words-and-greetings.component.scss"]
})
export class ThematicWordsAndGreetingsComponent implements OnInit {
  p: number;
  audio: any;
  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "16";
  type: string = "lesson";
  audioTag: any;
  index: any;

  pageStatusData: any = {
    submits_count: 0,
    pageNumber: 0,
    correct: 0,
    incorrect: 0,
    total: 0
  };

  constructor(private jsonData: data) {}

  jsonObject: any = {
    title: "Thematic words: Introducing and greeting",
    help: "<p>Simple greeting, introduction and goodbye phrases.<br><br></p>",
    info:
      "<p>Introducing and greeting someone are the first thing we say to someone or meet someone new. It's common to use different greetings depending on whether you use informal greetings or formal ones. Formal greetings are also used with people you do not know very well.<br>Learn how to greet how to greet, introduce and say goodbyes, and then practice these phrases with your Online Instructor.&nbsp; <br><br></p>",
    page: [
      {
        images: {
          item: [
            {
              image: {
                file:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/1.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/1.mp3"
              },
              text: "Բարև:/Ողջույն:",
              text_trans: "/Barev/ Hi /Voghjuin/ Hello."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/2.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/2.mp3"
              },
              text: "Բարի լույս:/Բարի առավոտ:",
              text_trans: "/Bari luis/Bari aravot/ Good morning."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/3.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/3.mp3"
              },
              text: "Բարի օր:",
              text_trans: "/Bari or/ Good afternoon."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/4.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/4.mp3"
              },
              text: "Բարի գիշեր:",
              text_trans: "/Bari gisher/ Good night."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/5.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/5.mp3"
              },
              text: "Բարի երեկո:",
              text_trans: "/Bari yereko/ Good evening."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/6.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/6.mp3"
              },
              text: "Քո անունը (անունդ) ի՞նչ է:",
              text_trans: "/Ko anunƏ/anunƏd inch e?/ What is your name?"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/7.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/7.mp3"
              },
              text: "Իմ անունը (անունս) Աննա է:",
              text_trans: "/Im anunƏ/anunƏs Anna e/ My name is Anna."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/8.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/8.mp3"
              },
              text: "Ձեր անունը ի՞նչ է:",
              text_trans: "/Dzer anunƏ inch e?/ What is Your name?"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/A.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/9.mp3"
              },
              text: "Իմ անունը (անունս) Արմեն է:",
              text_trans: "/Im anunƏ/anunƏs Armen e/ My name is Armen."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/10.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/10.mp3"
              },
              text: "Ինչպե՞ս ես:/Ո՞նց ես:",
              text_trans: "/Inchpes es/Vonts es?/ How are you?"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/11.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/11.mp3"
              },
              text: "Ինչպե՞ս եք:/Ո՞նց եք:",
              text_trans: "/Inchpes ek/Vonts ek?/ How are you?"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/12.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/12.mp3"
              },
              text: "Լավ եմ, շնորհակալություն:",
              text_trans: "/Lav em, shnorhakalutyun/ I am fine, thank you."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/13.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/13.mp3"
              },
              text: "Ես նույնպես լավ եմ/Ես էլ եմ լավ:",
              text_trans: "/Yes nuynpes lav em/Yes el em lav/ I am fine, too."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/14.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/14.mp3"
              },
              text: "Ուրախ եմ քեզ հետ ծանոթանալ:",
              text_trans: "/Urakh em qez het tzanotanal/ Glad to meet you."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/15.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/15.mp3"
              },
              text: "Ուրախ եմ Ձեզ հետ ծանոթանալ:",
              text_trans: "/Urakh em dzez het tzanotanal/ Glad to meet you."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/16.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/16.mp3"
              },
              text: "Շատ հաճելի է Ձեզ հետ ծանոթանալ:",
              text_trans:
                "/Shat hatjeli e Dzez het tzanotanal/ Nice to meet you."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/17.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/17.mp3"
              },
              text: "Շնորհակալություն:",
              text_trans: "/Shnorhakalutyun/ Thank you."
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/18.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/18.mp3"
              },
              text: "Ցտեսություն:",
              text_trans: "/Tstesutyun/ See you later!/Good bye!"
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
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/images/19.jpg",
                audio:
                  "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/16/audio/19.mp3"
              },
              text: "Առայժմ:",
              text_trans: "/AraizhƏm/ See you later!"
            }
          ]
        }
      }
    ]
  };

  // jsonObject : any = {'page': [] };

  statDateObjects: any = {
    correct: 0,
    incorrect: 0,
    total: this.jsonObject.page.length
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
        //console.log(response);
      });
    return;
  }

  ngOnInit() {
    this.getData();
    this.getTipsData();
    this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;

    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = [true];
    }
  }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "16";
    // console.log("kuku2");
    // console.log("course_id =" + course_id);
    // console.log('kuku');
    //  this.jsonData.getJson(course_id,lesson_id,item_id).subscribe(responseAlp => this.alphabet = responseAlp);
    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    //    console.log(response);
    // console.log(this.jsonObject);
    return this.jsonObject;
  }

  myindex() {
    let str = document.getElementsByClassName("current")[0].textContent;
    str = str.trim();
    let realindex = str.split("\n");
    this.index = parseInt(realindex[1]) - 1;
  }

  click(audio, id) {
    this.audioTag = document.createElement("audio");
    this.audioTag.setAttribute("src", audio.audio);
    this.audioTag.load();
    this.audioTag.play();
    this.myindex();
    this.pageStatusData.submits_count++;
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;

    if (this.pageList[this.index][id] && this.audioTag.play()) {
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
