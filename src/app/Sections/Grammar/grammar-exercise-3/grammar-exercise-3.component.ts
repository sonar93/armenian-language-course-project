import { Component, OnInit } from '@angular/core';
import { Data } from '../../../shared/data.service';

@Component({
  selector: 'app-grammar-exercise-3',
  templateUrl: './grammar-exercise-3.component.html',
  styleUrls: ['./grammar-exercise-3.component.scss']
})
export class GrammarExercise3Component implements OnInit {
  constructor(private jsonData: Data) {
    this.mustPlay = new Array(this.jsonObject.page)[0];
  }

  letter: any;
  realindex: any;
  [x: string]: any;
  pageIndex: any;
  currentSound: any = 0;
  playedLetter: any = '';
  mustPlay: any;
  index: any;
  rightAudio: any = './assets/right.mp3';
  wrongAudio: any = './assets/wrong.mp3';
  course_id = 'AL_102';
  lesson_id = 'Lesson_1';
  unit_name = 'AL_102-Lesson_1';
  item_name = '15';
  type = 'exercise';
  check_status = 0;
  divElement: any;

  /* jsonTipsObject: any = {
    tips: []
  };
  tipsArray: any = [];

  requesting: any;
  getTipsData() {
    this.jsonData
      .getTipsJson(this.course_id, this.lesson_id, this.item_name)
      .subscribe((response = []) => (this.jsonTipsObject.tips = response));
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
    submits_count: 0,
    pageNumber: 0,
    correct: 0,
    incorrect: 0,
    total: 0
  };

  jsonObject: any = {
    title: 'Exercise 3: Type the pronoun',
    help: '<p>Listen and type the correct pronoun.</p>',
    info:
      '<p>Type correct personal pronouns to complete the sentences. Before submitting the answer, click on the picture to listen to the pronoun and type it with a capital letter. <br></p>',
    page: [
      {
        number: '1',
        answer: 'Ես',
        text: '... ուսուցիչ եմ։',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/audio/1.mp3',
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/images/1.jpg'
      },
      {
        number: '2',
        answer: 'Դու',
        text: '... աղջիկ ես։',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/audio/2.mp3',
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/images/2.jpg'
      },
      {
        number: '3',
        answer: 'Նա',
        text: '... ուսուցիչ է։',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/audio/3.mp3',
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/images/3.jpg'
      },
      {
        number: '4',
        answer: 'Մենք',
        text: '... ուսանող ենք։',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/audio/4.mp3',
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/images/4.jpg'
      },
      {
        number: '5',
        answer: 'Դուք',
        text: '... ուսուցիչ եք։',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/audio/5.mp3',
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/images/5.jpg'
      },
      {
        number: '6',
        answer: 'Նրանք',
        text: '... ուսանող են։',
        audio_mp3:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/audio/6.mp3',
        image:
          'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/15/images/6.jpg'
      }
    ]
  };

  statDateObjects: any = {
    correct: 0,
    incorrect: 0,
    total: this.jsonObject.page.length
  };
  pageList: boolean[] = new Array(this.statDateObjects.total);

  ngOnInit() {
    this.getData();
    //this.getTipsData();
    //this.getTipIds();
    const right = new Audio(this.rightAudio);
    const wrong = new Audio(this.wrongAudio);
    this.notPlay = false;
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = this.jsonObject.page.length;
    this.setStatistics();

    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
  }

  getData() {
    const course_id = 'AL_102';
    const lesson_id = 'Lesson_1';
    const item_id = '15';

    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    return this.jsonObject;
  }

  myindex() {
    const str = document.getElementsByClassName('current')[0].textContent;
    const sl = str.slice(-24);
    this.realindex = sl.charAt(0);
    this.index = this.realindex - 1;
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

  playAudio() {
    this.myindex();
    let audio;
    let audioObj;
    const str = document.getElementsByClassName('current')[0].textContent;
    const sl = str.slice(-24);
    this.realindex = sl.charAt(0);
    this.index = this.realindex - 1;
    //console.log(this.index);
    if (this.mustPlay.length > 0) {
      audioObj = this.jsonObject.page[this.index].audio_mp3;
    }
    audio = new Audio(audioObj);
    audio.load();
    audio.play();
  }

  addAnswer(answer) {
    this.myindex();
    this.right = new Audio(this.rightAudio);
    this.wrong = new Audio(this.wrongAudio);
    const input = document.getElementById('mat');
    //console.log(this.jsonObject.page[this.index].text.replace('...', this.jsonObject.page[this.index].answer));
    if (
      answer === this.jsonObject.page[this.index].answer ||
      answer === this.jsonObject.page[this.index].answer.toUpperCase() ||
      answer ===
        this.jsonObject.page[this.index].answer.charAt(0).toUpperCase() +
          this.jsonObject.page[this.index].answer.slice(1) ||
      answer ===
        this.jsonObject.page[this.index].text.replace(
          '...',
          this.jsonObject.page[this.index].answer
        )
    ) {
      console.log();
      input.style.color = 'green';
      input.style.border = '3px solid green';
      this.right.play();
      this.right.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 1;
      this.pageStatusData.incorrect = 0;
      // console.log(this.index);
      // console.log(this.pageList[this.index]);

      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.correct++;
        this.setStatistics();
      }
    } else if (answer !== this.jsonObject.page[this.index].answer) {
      this.wrong.play();
      this.pageStatusData.submits_count++;
      this.pageStatusData.correct = 0;
      this.pageStatusData.incorrect = 1;
      if (this.pageList[this.index]) {
        this.pageList[this.index] = false;
        this.statDateObjects.incorrect++;
        this.setStatistics();
        this.check_status = 0;
      }
      this.check_status++;

			if (this.check_status === 3) {
       // console.log(this.check_status)
        const ans = document.getElementById('answer');
        ans.style.display = 'flex';
        input.style.color = 'red';
        input.style.border = '3px solid red';
        input.style.background = 'white';
        answer = this.jsonObject.page[this.index].answer;
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
    return false;
  }
}
