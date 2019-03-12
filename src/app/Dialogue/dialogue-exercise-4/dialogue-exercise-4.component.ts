import {Component, OnInit} from '@angular/core';
import {data} from '../../data.service';

@Component({
    selector: 'app-dialogue-exercise-4',
    templateUrl: './dialogue-exercise-4.component.html',
    styleUrls: ['./dialogue-exercise-4.component.scss']
})
export class DialogueExercise4Component implements OnInit {

    constructor(private jsonData: data) {
    }

    rightAudio: any = './assets/right.mp3';
    wrongAudio: any = './assets/wrong.mp3';

    str: string;
    submits_count: any;
    course_id: string = 'AL_102';
    lesson_id: string = 'Lesson_1';
    unit_name: string = 'AL_102-Lesson_1';
    item_name: string = '24';
    type: string = 'lesson';
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
    sentenceList: any = [];
    pageStatusData: any = {
        'submits_count': 0,
        'pageNumber': 0,
        'correct': 0,
        'incorrect': 0,
        'total': 0
    };

    statDateObjects: any = {'correct': 0, 'incorrect': 0, 'total': this.pageStatusData.total};
    pageList: any = new Array(new Array(this.pageStatusData.total));

    jsonObject: any = {
        'title': 'Exercise 4: Listen and complete ',
        'help': '<p>Listen and select the correct option.</p>',
        'info': '',
        'audio_mp3': 'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/24/audio/dialog_.mp3',
        'page': [{
            'num': '1',
            'text': 'Բարև, իմ անունը Արմեն է:',
            'option': ['անունը'],
            'optionList': ['անունը', 'երեկո', 'ծանոթանալ', 'Հաճելի', 'Ինչպե՞ս', 'լավ եմ:','շնորհակալություն,'],
            'speaker': 'Speaker 1'
        }, {
            'num': '2',
            'text': 'Բարի երեկո, Արմեն: Շատ ուրախ եմ Ձեզ հետ ծանոթանալ: Իմ անունը Անի է:',
            'option': ['երեկո,','ծանոթանալ:'],
            'optionList': ['անունը', 'երեկո,', 'ծանոթանալ:', 'Հաճելի', 'Ինչպե՞ս', 'լավ եմ:','շնորհակալություն,'],
            'speaker': 'Speaker 2'
        }, {
            'num': '3',
            'text': 'Հաճելի է Ձեզ հետ ծանոթանալ, Անի: Ինչպե՞ս եք:',
            'option': ['Հաճելի','Ինչպե՞ս'],
            'optionList': ['անունը', 'երեկո,', 'ծանոթանալ:', 'Հաճելի', 'Ինչպե՞ս', 'լավ եմ:','շնորհակալություն,'],
            'speaker': 'Speaker 1'
        }, {
            'num': '4',
            'text': 'Լավ եմ, շնորհակալություն, իսկ դո՞ւք:',
            'option': ['շնորհակալություն,'],
            'optionList': ['անունը', 'երեկո,', 'ծանոթանալ:', 'Հաճելի', 'Ինչպե՞ս', 'լավ եմ:','շնորհակալություն,'],
            'speaker': 'Speaker 2'
        }, {
            'num': '5',
            'text': 'Ես նույնպես լավ եմ: Կհանդիպենք:',
            'option': ['լավ եմ:'],
            'optionList': ['անունը', 'երեկո,', 'ծանոթանալ:', 'Հաճելի', 'Ինչպե՞ս', 'լավ եմ:','շնորհակալություն,'],
            'speaker': 'Speaker 1'
        }, {
            'num': '6',
            'text': 'Ցտեսություն:',
            'option': [' '],
            'optionList': ['անունը', 'երեկո,', 'ծանոթանալ:', 'Հաճելի', 'Ինչպե՞ս', 'լավ եմ:','շնորհակալություն,'],
            'speaker': 'Speaker 2'
        }]
    };


    ngOnInit() {

        this.getData();
        //this.getTipsData();
        //this.getTipIds();
        this.pageStatusData.submits_count = 0;
        this.pageStatusData.correct = 0;
        this.pageStatusData.incorrect = 0;

        this.setStatistics();


        // =======================================  START ===============================================
        for (let i = 0; i < this.jsonObject.page.length; i++) {
            this.sentenceList[i] = this.jsonObject.page[i].text;


            for (let j = 0; j < this.jsonObject.page[i].option.length; j++) {
                this.sentenceList[i] = this.sentenceList[i].replace(this.jsonObject.page[i].option[j], '#');
            }
            this.sentenceList[i] = this.sentenceList[i].split(' ');


            for (let k = 0; k < this.sentenceList[i].length; k++) {
                if (this.sentenceList[i][k] === '#') {
                    this.pageStatusData.total++;
                    this.sentenceList[i][k] = 0;
                }
            }

        }
       // console.log(this.pageList);

        // =======================================  END ===============================================

        this.pageList = new Array(this.jsonObject.page.length);
        for (let i = 0; i < this.jsonObject.page.length; i++) {
            let rowArray = new Array(this.sentenceList[i].length);
            for (let k = 0; k < this.sentenceList[i].length; k++) {
                rowArray[k] = true;
            }
            this.pageList[i] = rowArray;
        }

    }


    getData() {
        this.jsonData.getJson(this.course_id, this.lesson_id, this.item_name).subscribe(
            response => this.jsonObject = response);
        return this.jsonObject;
    }

    click(audio) {
        let audioTag = document.createElement('audio');
        audioTag.setAttribute('src', audio.audio);
        audioTag.load();
        audioTag.play();
    }

    setStatistics() {
        this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => console.log(response));
        return;
    }


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




    correct(id, option) {

        let parts = <HTMLInputElement>document.getElementById(id + '_' + option);
        let right = new Audio(this.rightAudio);
        let wrong = new Audio(this.wrongAudio);

        let zeroCount = -1;

        if (this.jsonObject.page[id].option.length === 1) {
            zeroCount = 0;
        }
        else {
            for (let i = 0; i <= option; i++) {
                if (this.sentenceList[id][i] === 0) {
                    zeroCount++;
                }
            }
        }

      //  console.log('option = ' + option);
      //  console.log('zeroCount = ' + zeroCount);
      //  console.log(parts.value.trim());
      //  console.log(this.jsonObject.page[id].option[zeroCount]);


        if (parts.value.trim() === this.jsonObject.page[id].option[zeroCount]) {

         //   console.log('this.jsonObject.page[' + id + '].option[' + zeroCount + '] - ' + this.jsonObject.page[id].option[zeroCount]);
         //   console.log('parts.value.trim() - ' + parts.value.trim());
            parts.style.color = '#50c878';
            parts.setAttribute('disabled', 'disabled');
            right.play();
            this.pageStatusData.submits_count++;
            this.pageStatusData.correct = 1;
            this.pageStatusData.incorrect = 0;
            if (this.pageList[id][option]) {
                this.pageList[id][option] = false;
                this.statDateObjects.correct++;
                this.setStatistics();
            }
        } else {
            // row.style.color = 'red';
            parts.style.color = 'red';
            wrong.play();
            this.pageStatusData.submits_count++;
            this.pageStatusData.correct = 0;
            this.pageStatusData.incorrect = 1;
            if (this.pageList[id][option]) {
                this.pageList[id][option] = false;
                this.statDateObjects.incorrect++;
                this.setStatistics();
            }
        }
     //   console.log('this.statDateObjects.incorrect = ' + this.statDateObjects.incorrect);
      //  console.log('this.statDateObjects.correct = ' + this.statDateObjects.correct);
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
