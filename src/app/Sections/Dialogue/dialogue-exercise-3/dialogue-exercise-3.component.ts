import { Component, OnInit } from '@angular/core';
import { Data } from '../../../shared/data.service';

@Component({
  selector: 'app-dialogue-exercise-3',
  templateUrl: './dialogue-exercise-3.component.html',
  styleUrls: ['./dialogue-exercise-3.component.scss']
})
export class DialogueExercise3Component implements OnInit {

  splitArray: any;
  constructor(private jsonData: Data) { }


  ngOnInit() {
    this.getData();
   // this.getTipsData();
   // this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.sentence.length;

    this.setStatistics();


    for (let i=0; i<this.pageList.length; i++) {
      this.pageList[i] = [true, true];
    }
  }



 getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "23";
    this.jsonData.getJson(course_id,lesson_id,item_id).subscribe(
      response => this.jsonObject = response);
    return this.jsonObject;
  }

  click(audio, id) {
    let audioTag = document.createElement('audio');
    audioTag.setAttribute('src', audio.audio);
    audioTag.load();
    audioTag.play();
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.sentence.length;
    if (this.pageList[id]) {
      this.pageList[id] = false;
      this.statDateObjects.correct++;
      this.setStatistics();
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

  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "23";
  type: string = "lesson";
  /*jsonTipsObject: any = {
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
  "title": "Exercise 3: Listen and repeat",
  "unitID": "AL_102",
  "itemID": "26",
  "help" : "",
  "info": "",
  "type": "exercise",
  "page": {
    "audio_mp3": "../assets/26/media/audio/dialog_.mp3",
    "sentence": [
      {
        "text": "Բարև, իմ անունը Արմեն է:/ Barev im anunə Armen e. / Hello, my name is Armen. /",
        "speaker": "Արմեն",
        "audio": "../assets/26/media/audio/1.mp3",
      },
      {
        "text": "Բարի երեկո, Արմեն: Շատ ուրախ եմ Ձեզ հետ ծանոթանալ: Իմ անունը Անի է: / Bari yereko, Armen.Shat urakh em Dzez het tzanotanal. Im anunə Ani e. / Good evening, Armen. I am very glad to meet you. My name is Ani. /",
        "speaker": "Անի",
        "audio": "../assets/26/media/audio/2.mp3",
      },
      {
        "text": "Հաճելի է Ձեզ հետ ծանոթանալ, Անի: Ինչպե՞ս եք: /Hatjeli e Dzez het tzanotanal, Ani. Inchpes ek? / It is nice to meet you, Ani. How are you? /",
        "speaker": "Արմեն",
        "audio": "../assets/26/media/audio/3.mp3",
      },
      {
        "text": "Լավ եմ, շնորհակալություն, իսկ դո՞ւք:/ Lav em, shnorhakalutyun, isk duk? / I am fine, thank you, and what about you?/",
        "speaker": "Անի",
        "audio": "../assets/26/media/audio/4.mp3",
      },
      {
        "text": "Ես նույնպես լավ եմ: Կհանդիպենք:/ Yes nyinpes lav em. Khandipenk. / I am fine, too. See you. /",
        "speaker": "Արմեն",
        "audio": "../assets/26/media/audio/5.mp3",
      },
      {
        "text": "Ցտեսություն:/ Tstesutyun. / Goo bye. /",
        "speaker": "Անի",
        "audio": "../assets/26/media/audio/6.mp3",
      }
      ]
    }
  };
  setStatistics() {
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => console.log(response));
    return;
  }

  pageStatusData: any = {
    "submits_count": 0,
    "pageNumber": 0,
    "correct": 0,
    "incorrect": 0,
    "total": 0
  };

  statDateObjects: any = {"correct": 0, "incorrect": 0, "total": this.jsonObject.page.sentence.length};
  pageList: any [] = new Array(this.statDateObjects.total);


}
