import { Component, OnInit } from '@angular/core';
import {Data} from '../../../shared/data.service';

@Component({
  selector: 'app-thematic-words-exercise-3',
  templateUrl: './thematic-words-exercise-3.component.html',
  styleUrls: ['./thematic-words-exercise-3.component.scss']
})
export class ThematicWordsExercise3Component implements OnInit {
  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = '';
  mustPlay: any;
  shuffled: any;
  audio: any ;
  audioObj: any;
  p:any;
  rightAudio: any = './assets/right.mp3';
  wrongAudio: any = './assets/wrong.mp3';

  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "19";
  type: string = "exercise";
  /* jsonTipsObject: any = {
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
  */

  constructor(private jsonData: Data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
    this.shuffled = new Array(this.jsonObject.page[0].options.text);
  }

  ngOnInit() {
    this.getData();
    //this.getTipsData();
    //this.getTipIds();
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

  jsonObject: any = {
    "title": "Exercise 3: Listen and translate",
    "help": "<p>Listen to the expressions in Armenian and select the English translation.</p>",
    "info": "",
    "right-audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/audio/right.mp3",
    "wrong-audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/audio/wrong.mp3",
    "page": [{
      "answer": "What is your name?",
      "text": "Ձեր անունը ի՞նչ է:",
      "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/audio/1.mp3",
      "image_url": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/images/1.jpg",
      "options": {
        "text": ["What is your name?", "Have a nice day.", "How are you?"]
      }
    }, {
      "answer": "I am fine, thank you.",
      "text": "Լավ եմ, շնորհակալություն:",
      "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/audio/2.mp3",
      "image_url": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/images/2.jpg",
      "options": {
        "text": ["I am fine, thank you.", "My name is Armen.", "Good night."]
      }
    }, {
      "answer": "I am glad to meet you.",
      "text": "Ուրախ եմ ձեզ հետ ծանոթանալ:",
      "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/audio/3.mp3",
      "image_url": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/images/3.jpg",
      "options": {
        "text": ["Stay well.", "I am glad to meet you.", "Good morning."]
      }
    }, {
      "answer": "Thank you.",
      "text": "Շնորհակալություն:",
      "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/audio/4.mp3",
      "image_url": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/images/4.jpg",
      "options": {
        "text": ["See you later.", "Good bye.", "Thank you."]
      }
    }, {
      "answer": "I am fine,too.",
      "text": "Ես նույնպես լավ եմ:",
      "audio_mp3": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/audio/5.mp3",
      "image_url": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/19/images/5.jpg",
      "options": {
        "text": ["I am very glad.", "How are you?", "I am fine,too."]
      }
    }]
  };

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  ngAfterViewInit(){
    this.myindex();

    this.audio = new Audio(this.audioObj);
    this.playedLetter = this.mustPlay[this.index].answer;
  }

  pageStatusData: any = {
    "submits_count": 0,
    "pageNumber": 0,
    "correct": 0,
    "incorrect": 0,
    "total": 0
  };
  // notesData: any = {"notes": [{"Title": "Take a note ..."}, {"Title": "Take a note ..."}, {"Title": "Take a note ..."}]};
  statDateObjects: any = {"correct": 0, "incorrect": 0, "total": this.jsonObject.page.length};
  pageList: boolean[] = new Array(this.statDateObjects.total);


  getData (){
    let course_id = 'AL_102';
    let lesson_id = 'Lesson_1';
    let item_id = '19';


    this.jsonData.getJson(course_id,lesson_id,item_id).subscribe(
      response => this.jsonObject = response);
      return this.jsonObject;
  }

  setStatistics() {
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => console.log(response));
    return;
  }


  myindex() {
    let str = document.getElementsByClassName("current")[0].textContent;
   console.log(str);
str = str.trim();
let realindex = str.split('\n');
    this.index = parseInt(realindex[1]) - 1;
    console.log(this.index);
}

  letter: any;

  playAudio() {
    this.myindex();
    this.audioObj = this.mustPlay[this.index].audio_mp3;
    this.playedLetter = this.mustPlay[this.index].answer;
    this.audio.setAttribute('src', this.audioObj);
    this.audio.load();
    this.audio.play();
    //this.audio = new Audio(this.audioObj);
  }

  correct(pageIndex, id) {
    this.myindex();
    let right = new Audio(this.rightAudio);
    let wrong = new Audio(this.wrongAudio);
    let divElement = document.getElementById(id);
    if (pageIndex === id && divElement.style.background !== 'rgba(0,0,0,.4)') {
      right.play();
      divElement.style.borderColor = 'green';
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 1;
      this.pageStatusData.incorrect = 0;
      if (this.pageList[this.index ]) {
        this.pageList[this.index ] = false;
        this.statDateObjects.correct++;
        this.setStatistics();
      }
    } else {
      divElement.style.borderColor = 'red';
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
  /*  this.jsonData.showTip(
      this.jsonTipsObject.tips,
      this.statDateObjects,
      this.tipsArray,
      this.unit_name,
      this.item_name
    );
    */
  }

}
