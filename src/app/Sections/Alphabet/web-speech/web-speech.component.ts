import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpeechRecognizerService } from './shared/services/speech-recognizer.service';

import { SpeechNotification } from './shared/model/speech-notification';
import { SpeechError } from './shared/model/speech-error';
import { ActionContext } from './shared/model/strategy/action-context';
import { Data } from '../../../shared/data.service';

@Component({
  selector: 'wsa-web-speech',
  templateUrl: './web-speech.component.html',
  styleUrls: ['./web-speech.component.css']
})
export class WebSpeechComponent implements OnInit {

  index: any;
  p: number;
  show: boolean = true;
  finalTranscript = '';
  recognizing = false;
  notification: string;
  languages: string[] = ['hy'];
  currentLanguage: string;
  actionContext: ActionContext = new ActionContext();
  split: any = [];
  splitRightAnswer: any = [];
  countMatrix: any = [];
  finalStyleEl: any;
  check: string;
  rightAudio: any = './assets/right.mp3';
  wrongAudio: any = './assets/wrong.mp3';

  constructor(private changeDetector: ChangeDetectorRef,
    private speechRecognizer: SpeechRecognizerService,
    private jsonData: Data
    ) { }

  ngOnInit() {
    this.setData();
    this.currentLanguage = this.languages[0];
    this.speechRecognizer.initialize(this.currentLanguage);
    this.initRecognition();
    this.notification = null;
    this.finalTranscript = ``;
    // this.myindex();
  }

  startButton(event, id) {
    if (this.recognizing) {
      this.speechRecognizer.stop();
      return;
    }
    this.finalTranscript = '';
    this.check = '';
    this.speechRecognizer.start(event.timeStamp);
  }

  onSelectLanguage(language: string) {
    this.currentLanguage = language;
    this.speechRecognizer.setLanguage(this.currentLanguage);
  }

  jsonObject: any = {
    item: []
  };

  course_id = "AL_102";
  lesson_id = "Lesson_1";
  item_id = "30";

  setData(){
    this.jsonData.getJson(this.course_id,this.lesson_id,this.item_id).subscribe(
      response => this.jsonObject = response);
    return this.jsonObject;
  }

  // lib: any = { "title": "Vocabulary", "help": "Practise your speech", "info": " ", "item": [{ "text": "բարև", "trans": "Hi/Hello", "translit": "barev", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/1.mp3" }, { "text": "բարի լույս", "trans": " Good morning", "translit": "bari luys", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/2.mp3" }, { "text": "բարի օր ", "trans": " Good day ", "translit": "bari or", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/3.mp3" }, { "text": "բարի գիշեր", "trans": " Good night", "translit": "bari gisher", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/4.mp3" }, { "text": "բարի երեկո", "trans": "Good evening ", "translit": "bari yereko", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/5.mp3" }, { "text": "անուն", "trans": "name ", "translit": "anun", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/6.mp3" }, { "text": "ապրել", "trans": "to live", "translit": "aprel", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/7.mp3" }, { "text": "Որտե՞ղ ես ապրում: ", "trans": "Where do you live. ", "translit": "Vortegh es aprum?", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/8.mp3" }, { "text": "Ես ապրում եմ Երևանում: ", "trans": "I live in Yerevan ", "translit": "Yes aprum em Yerevanum.", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/9.mp3" }, { "text": "Ինչպե՞ս ես (is used in everyday / colloquial/ speech)", "trans": "How are you? ", "translit": "Inchpes es/vonc es?", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/10.mp3" }, { "text": "Լավ եմ: ", "trans": "I am fine", "translit": "Lav em", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/11.mp3" }, { "text": "շնորհակալություն", "trans": "Thank You. ", "translit": "shnorhakalutyun", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/12.mp3" }, { "text": "նույնպես", "trans": "too ", "translit": "nuinpes", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/13.mp3" }, { "text": "ծանոթանալ ", "trans": " to meet", "translit": "tzanotanal", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/14.mp3" }, { "text": "ուրախ եմ ", "trans": " I am glad", "translit": "urakh em", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/15.mp3" }, { "text": "հաճելի է ", "trans": " I’m pleased", "translit": "hatjeli e", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/16.mp3" }, { "text": "ցտեսություն ", "trans": " See You later! /Good bye! ", "translit": "tstesutyun", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/17.mp3" }, { "text": "մնաս բարով /մնաք բարով ", "trans": " Stay well. ", "translit": "mnas barov", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/18.mp3" }, { "text": "առայժմ ", "trans": "See You later! ", "translit": "araizhƏm", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/19.mp3" }, { "text": "իսկ", "trans": "and, too ", "translit": "isk", "audio": "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/25/audio/20.mp3" }] }

  private initRecognition() {

    this.speechRecognizer.onStart()
      .subscribe(data => {
        this.recognizing = true;
        this.notification = 'Spell the word...';
        this.detectChanges();
      });

    this.speechRecognizer.onEnd()
      .subscribe(data => {
        this.recognizing = false;
        this.detectChanges();
        this.notification = null;
      });

    this.speechRecognizer.onResult()
      .subscribe((data: SpeechNotification) => {
        const message = data.content.trim();
        let right = new Audio(this.rightAudio);
        let wrong = new Audio(this.wrongAudio);
        if (data.info === 'final_transcript' && message.length > 0) {
         // console.log(message);
          let str = document.getElementsByClassName("current")[0].textContent;
          str = str.trim();
          let realindex = str.split('\n');
          this.index = parseInt(realindex[1]) - 1;
          //      this.myindex();
          if (message.trim() === this.jsonObject.item[this.index].text.trim() || message.trim() === this.jsonObject.item[this.index].translit.trim()) {
         //   console.log(this.index);
            this.finalTranscript = this.jsonObject.item[this.index].text.trim();
            right.play();
            this.finalStyleEl = document.getElementById('final');
            this.finalStyleEl.style.color = '#00796b';
            this.check = 'Right! :)';
            this.speechRecognizer.stop();
         //   console.log(message);
            const splitAnswer = message.split('');
            this.split.push(splitAnswer);
            // tslint:disable-next-line:no-debugger
            console.log(this.split);
            const splitRightAnswer = this.jsonObject.item[this.index].text.trim().split('');
            this.splitRightAnswer.push(splitRightAnswer);
            // tslint:disable-next-line:no-debugger
           // console.log(this.splitRightAnswer);
            this.countMatrix.push(this.split, this.splitRightAnswer);
           // console.log(this.countMatrix);
            for (let r = 0, j = 0; j < this.split.length; j++) {
              for (let i = 0; i < this.countMatrix; i++) {
                if (this.split[i] !== this.countMatrix[i][j]) {
                  break;
                } else  {
                  r += this.countMatrix[i][j];
                  console.log(r);
                }
              }
             }

          } else {
           // console.log(this.index);
            this.finalTranscript = `${this.finalTranscript}\n${message}`;
            this.check = 'Try again...';
            wrong.play();
            this.finalStyleEl = document.getElementById('final');
            this.finalStyleEl.style.color = 'red';
          }

          this.actionContext.processMessage(message, this.currentLanguage);
          this.detectChanges();
          this.actionContext.runAction(message, this.currentLanguage);
        }
      });

    this.speechRecognizer.onError()
      .subscribe(data => {
        switch (data.error) {
          case SpeechError.BLOCKED:
          case SpeechError.NOT_ALLOWED:
            this.notification = `Cannot run the demo.
            Your browser is not authorized to access your microphone. Verify that your browser has access to your microphone and try again.
            `;
            break;
          case SpeechError.NO_SPEECH:
            this.notification = `No speech has been detected. Please try again.`;
            break;
          case SpeechError.NO_MICROPHONE:
            this.notification = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
            break;
          default:
            this.notification = null;
            break;
        }
        this.recognizing = false;
        this.detectChanges();
      });
  }

  detectChanges() {
    this.changeDetector.detectChanges();
  }
}
