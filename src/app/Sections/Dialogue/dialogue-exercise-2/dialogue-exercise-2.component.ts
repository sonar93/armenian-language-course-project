import { Component, OnInit } from '@angular/core';
import { Data } from '../../../shared/data.service';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dialogue-exercise-2',
  templateUrl: './dialogue-exercise-2.component.html',
  styleUrls: ['./dialogue-exercise-2.component.scss']
})
export class DialogueExercise2Component implements OnInit {
  msg = '';

  items = [];


  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter = '';
  mustPlay: any;
  p: any;
  notPlay: any;

  rightAudio: any = './assets/right.mp3';
  wrongAudio: any = './assets/wrong.mp3';

  submits_count: any;
  course_id = 'AL_102';
  lesson_id = 'Lesson_1';
  unit_name = 'AL_102-Lesson_1';
  item_name = '22';
  type = 'exercise';

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
        //console.log(response);
      });
    return;
  }
  */

  pageStatusData: any = {
    'submits_count': 0,
    'pageNumber': 0,
    'correct': 0,
    'incorrect': 0,
    'total': 0
  };

  constructor(private dragula: DragulaService, private jsonData: Data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
  }
  subs = new Subscription();
  ngOnInit() {
    this.getData();
   // this.getTipsData();
  //  this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;

    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }

    const body = document.getElementById('body');
    this.subs.add(this.dragula.drag().subscribe((value) => {
      body.style.overflowY = `hidden`;
    }));

    this.subs.add(this.dragula.drop().subscribe(value => {
      body.style.overflowY = `auto`;
      this.correct(this.pageIndex, this.playedLetter);

      setTimeout(() => {
        this.msg = '';
      }, 1000);
    }));
  }

  ngAfterViewInit() {
    this.myindex();
    this.audio = new Audio(this.audioObj);
    this.playedLetter = this.mustPlay[this.index].answer;
  }

  getData() {
    const course_id = 'AL_102';
    const lesson_id = 'Lesson_1';
    const item_id = '22';

    this.jsonData.getJson(course_id, lesson_id, item_id).subscribe(
      response => this.jsonObject = response);
    return this.jsonObject;
  }


  setStatistics() {
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => response);
    return;
  }
  jsonObject: any = {
    title: 'Exercise 2: Build sentences',
    help: '<p>Click to listen and rearrange the words to build sentences.</p>',
    info:
      '<p>This activity is specifically designed to teach word order when greeting or introducing is necessary. To complete this activity try to focus on the meaning of new words and on word order in the dialogue section.<br></p>',
    page: [
      {
        text: [
          { part: 'Բարև, ' },
          { part: 'Արմեն ' },
          { part: 'անունը ' },
          { part: 'իմ ' },
          { part: 'է:' }
        ],
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/images/1.jpg',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/1.mp3',
        audios:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/ok.mp3',
        answer: 'Բարև, իմ անունը Արմեն է:'
      },
      {
        text: [
          { part: 'եմ ' },
          { part: 'ուրախ ' },
          { part: 'հետ ' },
          { part: 'Շատ ' },
          { part: 'ծանոթանալ:' },
          { part: 'Ձեզ ' }
        ],
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/images/2.jpg',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/2.mp3',
        audios:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/ok.mp3',
        answer: 'Շատ ուրախ եմ Ձեզ հետ ծանոթանալ:'
      },
      {
        text: [
          { part: 'եք։' },
          { part: 'ինչպես ' },
          { part: 'Հաճելի ' },
          { part: 'ծանոթանալ, ' },
          { part: 'է ' },
          { part: 'հետ ' },
          { part: 'Ձեզ ' }
        ],
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/images/3.jpg',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/3.mp3',
        audios:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/ok.mp3',
        answer: 'Հաճելի է Ձեզ հետ ծանոթանալ, ինչպես եք։'
      },
      {
        text: [
          { part: 'դո՞ւք:' },
          { part: 'Լավ ' },
          { part: 'շնորհակալություն, ' },
          { part: 'եմ,' },
          { part: 'իսկ ' }
        ],
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/images/4.jpg',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/4.mp3',
        audios:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/ok.mp3',
        answer: 'Լավ եմ,շնորհակալություն, իսկ դո՞ւք:'
      },
      {
        text: [
          { part: 'լավ ' },
          { part: 'նույնպես ' },
          { part: 'Ես ' },
          { part: 'եմ:' }
        ],
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/images/5.jpg',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/5.mp3',
        audios:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/22/audio/ok.mp3',
        answer: 'Ես նույնպես լավ եմ:'
      }
    ]
  };

  statDateObjects: any = {'correct': 0, 'incorrect': 0, 'total': this.jsonObject.page.length};
  pageList: boolean[] = new Array(this.statDateObjects.total);

  myindex() {
    let str = document.getElementsByClassName('current')[0].textContent;
    // let sl = str.slice(-24);
    // console.log(str);
    str = str.trim();
    const realindex = str.split('\n');
    //this.realindex = sl.charAt(0);
    this.index = parseInt(realindex[1]) - 1;
    //console.log(this.index)
  }

  letter: any;

  playAudio() {
    this.myindex();
    this.audioObj = this.mustPlay[this.index].audio_mp3;
//    this.audio = new Audio(this.audioObj);
    this.playedLetter = this.mustPlay[this.index].answer;
    this.audio.setAttribute('src', this.audioObj);
    this.audio.load();
    this.audio.play();
    this.notPlay = true;
  }

  divElement: any = [];

  correct(pageIndex, id) {
    this.myindex();
    this.playedLetter = this.mustPlay[this.index].answer;
    const right = new Audio(this.rightAudio);
    const wrong = new Audio(this.wrongAudio);
    this.divElement = document.getElementById('result').children;
    let result = '';
    for (let i = 0; i < this.divElement.length; i++) {
      result += this.divElement[i].textContent;
    }
    const listItem = document.getElementsByClassName('item');

   // console.log(result);
   // console.log(this.playedLetter.trim());
    if (result === this.playedLetter.trim()) {
      for (let i = 0; i < this.divElement.length; i++) {

        this.divElement[i].style.border = '3px solid green';
        this.divElement[i].style.background = 'white';
        this.divElement[i].style.color = 'green';
        right.play();
        this.pageStatusData.submits_count++;
        this.pageStatusData.correct = 1;
        this.pageStatusData.incorrect = 0;
        this.pageStatusData.total = this.jsonObject.page.length;
        //console.log(this.index);
        //console.log(this.pageList);

        if (this.pageList[this.index]) {
          this.pageList[this.index] = false;
          this.statDateObjects.correct++;
          this.setStatistics();
        }
      }
      //setTimeout(this.jsonObject.page[p++], 3000);
    } else {
      for (let i = 0; i < this.divElement.length; i++) {

        this.divElement[i].style.border = '3px solid white';
        this.divElement[i].style.background = '';
        this.divElement[i].style.color = 'white';
        wrong.play();
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
