import { Component, OnInit} from '@angular/core';
import { Data } from '../../../shared/data.service';

@Component({
  selector: 'app-alphabet-exercise-2',
  templateUrl: './alphabet-exercise-2.component.html',
  styleUrls: ['./alphabet-exercise-2.component.scss']
})

export class AlphabetExercise2Component implements OnInit {
  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = '';
  title = 'EXERCISE 1';
  mustPlay: any;
  playSound: any;
  letter: any;
  submits_count: any;
  course_id = 'AL_102';
  lesson_id = 'Lesson_1';
  unit_name = 'AL_102-Lesson_1';
  item_name = '4';
  type = 'exercise';

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
  requesting: any;
  pageStatusData: any = {
    'submits_count': 0,
    'pageNumber': 0,
    'correct': 0,
    'incorrect': 0,
    'total': 0
  };

  constructor(private jsonData: Data) {

    this.mustPlay = new Array(this.jsonObject.page.items.letter)[0];
    this.playSound = Object.assign([], this.mustPlay);

    this.mustPlay = this.shuffle(this.mustPlay);
    this.playSound = this.shuffle(this.playSound);
  }

  jsonObject: any =
    {
      "title": "Exercise 2: Listen and select ",
      "help": "<p>Listen to the letters pronounced and select the correct option.<br><br><br><br></p>",
      "info": "<p><span style=\"font-family: Sylfaen, serif; font-size: 12pt;\">Alphabet practice exercise helps you to review the pronunciation of the letters for accurate spelling.</span>",
      "rightaudio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/audio/right.mp3",
      "wrongaudio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/audio/wrong.mp3",
      "page": {
        "image": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/images/transparent.png",
        "items": {
          "letter": [{
            "num": "1",
            "audio_file": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/audio/ա.mp3",
            "text": "Ա ա"
          }, {
            "num": "2",
            "audio_file": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/audio/ս.mp3",
            "text": "Ս ս"
          }, {
            "num": "3",
            "audio_file": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/audio/ր.mp3",
            "text": "Ր ր"
          }, {
            "num": "4",
            "audio_file": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/audio/ու.mp3",
            "text": "Ու ու"
          }, {
            "num": "5",
            "audio_file": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/4/audio/տ.mp3",
            "text": "Տ տ"
          }]
        }
      }
    };


  ngOnInit() {
    this.getData();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total =  5;
    this.setStatistics();
  }

  ngAfterViewInit(){
    this.getData();
  }

  getData(){
    const course_id = 'AL_102';
    const lesson_id = 'Lesson_1';
    const item_id = '4';

    this.jsonData.getJson(course_id, lesson_id, item_id).subscribe(
      response => this.jsonObject = response);
//    console.log(response);
    // console.log(this.jsonObject);
    return this.jsonObject;
  }

  statDateObjects: any = {'correct': 0, 'incorrect': 0, 'total': 5};
  pageList: boolean[] = new Array(this.statDateObjects.total);

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

  setStatistics() {
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => console.log(response));
    return;
  }


  playAudio() {
    let audio;
    let audioObj;
    const index = this.currentSound;
    if (this.mustPlay.length > 0) {
      audioObj = this.playSound[index].audio_file;
      this.playedLetter = this.playSound[index].text;
    }
    //console.log(currentSound);
    audio = new Audio(audioObj);
    audio.load();
    audio.play();
  }

  correct(text, id) {
    const curStyle = document.getElementById(id).style.background;
    const divElement = document.getElementById(id);
    if (text === this.playedLetter && divElement.style.background.trim() === '') {
      // console.log(divElement.style.background);
      // console.log(divElement.style.background.trim() !== '');
      this.currentSound++;
      divElement.style.background = 'green';

      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 1;
      this.pageStatusData.incorrect = 0;
      this.statDateObjects.correct++;
      this.setStatistics();
      setTimeout(this.playAudio(), 1000);
    } else {
      this.playAudio();
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
