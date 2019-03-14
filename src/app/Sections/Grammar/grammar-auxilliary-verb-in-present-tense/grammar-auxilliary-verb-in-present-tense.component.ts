import { Component, OnInit } from '@angular/core';
import { Data } from '../../../shared/data.service';

@Component({
  selector: 'app-grammar-auxilliary-verb-in-present-tense',
  templateUrl: './grammar-auxilliary-verb-in-present-tense.component.html',
  styleUrls: ['./grammar-auxilliary-verb-in-present-tense.component.scss']
})
export class GrammarAuxilliaryVerbInPresentTenseComponent implements OnInit {
  jsonObject: any = {
    title: 'Grammar: \'To be\' in present\'',
    secondary_title: '',
    help: '<p>Listen and practice.</p>',
    info: '<p><b><font color=\"#c10300\">Եմ</font> auxiliary verb helps to form other different forms of the verb. It has present, past tense  forms<br></b></p><p style=\"text-align:center\"><b><font color=\"#c10300\">PRESENT TENSE</font></b></p><p></p><table style=\"border: 1px solid black\">          <tbody><tr>          <th>Singular</th>          <th>Plural</th>              </tr>             <tr>                 <td>1st person (գրում, խաղում) <b>եմ</b><br>                                  2nd person (գրում, խաղում) <b>ես</b><br>                                      3rd person (գրում, խաղում) <b>է </b>                      </td>              <td>  (գրում, խաղում) <b>ենք</b><br>                    (գրում, խաղում) <b>եք</b><br>                       (գրում, խաղում) <b>են</b>                 </td>           </tr>          </tbody></table><p style=\"text-align:center\"><b><font color=\"#c10300\">PAST TENSE</font></b></p><table align=\"center\">          <tbody><tr>          <th>Singular</th>          <th>Plural</th>              </tr>             <tr>                 <td style=\"border: 1px solid black\">                     1st person (գրում, խաղում) <b>էի</b><br>                                          2nd person (գրում, խաղում) <b>էիր</b><br>                                             3rd person (գրում, խաղում) <b>էր</b>                          </td>              <td style=\"border: 1px solid black\">                  (գրում, խաղում) <b>էինք</b><br>                   (գրում, խաղում) <b>էիք</b><br>                     (գրում, խաղում) <b>էին</b>                   </td>           </tr>          </tbody></table><p><b>As an independent <font color=\"#c10300\">եմ</font> verb is used in the meaning of <font color=\"#c10300\">լինել, գոյություն ունենալ</font> / to be, to exist.</b></p>',

    page: [
      {
        meaning: ['1st person',
                  '2nd person',
                  '3rd person'
                ],
        Singular: {
          item: [
            {
              text: 'ես - ես եմ',
              text_trans: 'I - I am',
              audio: 'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/11/audio/1.mp3'
            },
            {
              text: 'դու - դու ես',
              text_trans: 'you - you are',
              audio: 'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/11/audio/2.mp3'
            },
            {
              text: 'նա - նա է',
              text_trans: 'he/she/it - he/she/it is',
              audio: 'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/11/audio/3.mp3'
            }
          ]
        },
        Plural: {
          item: [
            {
              text: 'մենք - մենք ենք',
              text_trans: 'we - we are',
              audio: 'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/11/audio/4.mp3'
            },
            {
              text: 'դուք - դուք եք',
              text_trans: 'you - you are',
              audio: 'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/11/audio/5.mp3'
            },
            {
              text: 'նրանք - նրանք են',
              text_trans: 'they - they are',
              audio: 'https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/11/audio/6.mp3'
            }
          ]
        }
      }
    ]
  };

  audioTag: any;
  submits_count: any;
  course_id = 'AL_102';
  lesson_id = 'Lesson_1';
  unit_name = 'AL_102-Lesson_1';
  item_name = '11';
  type = 'exercise';
  jsonTipsObject: any = {
    tips: []
  };
  tipsArray: any = [];

  requesting: any;

  pageStatusData: any = {
    submits_count: 0,
    pageNumber: 0,
    correct: 0,
    incorrect: 0,
    total: 0
  };

  statDateObjects: any = { correct: 0, incorrect: 0, total: 6 };
  pageList: boolean[] = new Array(this.statDateObjects.total);

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

  constructor(private jsonData: Data) {}

  ngOnInit() {
    this.audioTag = document.createElement('audio');
    this.getData();
    this.getTipsData();
    this.getTipIds();
    this.setStatistics();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = 6;

    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
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

  getData() {
    const course_id = 'AL_102';
    const lesson_id = 'Lesson_1';
    const item_id = '11';
    // console.log('course_id =' + course_id);
    // console.log('kuku');
    // this.jsonData.getJson(course_id,lesson_id,item_id).subscribe(responseAlp => this.jsonObject = responseAlp);
    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    return this.jsonObject;
  }
  audio: any;

  click(audio, id) {
    this.audioTag.setAttribute('src', audio.audio);
    // this.audioTag.load();
    this.audioTag.play();
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;
    //console.log(this.pageList[id]);
   console.log(id);
    if (this.pageList[id] && this.audioTag.play()) {
      this.pageList[id] = false;
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
    text = document.getElementById('show_' + i);
    trans = document.getElementById('hide_' + i);
    text.style.display = 'none';
    trans.style.display = 'block';
  }

  transHover(i) {
    let text;
    let trans;
    for (i = 0; i < 3; i++) {
      text = document.getElementById('show_' + i);
      trans = document.getElementById('hide_' + i);
      text.style.display = 'block';
      trans.style.display = 'none';
    }
  }

  textHover_1(j) {
    const text = document.getElementById('showi_' + j);
    const trans = document.getElementById('hidei_' + j);
    text.style.display = 'none';
    trans.style.display = 'block';
  }

  transHover_1(j) {
    let text;
    let trans;
    for (j = 0; j < 3; j++) {
      text = document.getElementById('showi_' + j);
      trans = document.getElementById('hidei_' + j);
      text.style.display = 'block';
      trans.style.display = 'none';
    }
  }
}
