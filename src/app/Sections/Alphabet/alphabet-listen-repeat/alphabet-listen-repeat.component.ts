import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { Data } from '../../../shared/data.service';


@Component({
  selector: 'app-alphabet-listen-repeat',
  templateUrl: './alphabet-listen-repeat.component.html',
  styleUrls: ['./alphabet-listen-repeat.component.scss']
})
export class AlphabetListenRepeatComponent implements OnInit {

  constructor(private jsonData: Data) {
  }

  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "2";
  type: string = "lesson";

  pageStatusData: any = {
    "submits_count": 0,
    "pageNumber": 0,
    "correct": 0,
    "incorrect": 0,
    "total": 0
  };
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

  statDateObjects: any = {"correct": 0, "incorrect": 0, "total": 10};
  pageList: boolean[] = new Array(this.statDateObjects.total);

  jsonObject: any = {
      'page': {}
  };

 

  setStatistics() {
    this.jsonData.submitStatus(this.unit_name, this.item_name, this.type, this.pageStatusData).subscribe(response => console.log(response));
    return;
  }

  audioTag: any;

  ngOnInit() {
    this.audioTag = document.createElement('audio');
    this.getData();
    this.getTipsData();
    this.getTipIds();
    this.pageStatusData.submits_count = 0;
    this.pageStatusData.correct = 0;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = 6;

    this.setStatistics();

    //this.getData();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }

  }

  getData() {
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "2";

    this.jsonData.getJson(course_id, lesson_id, item_id).subscribe(
      response => this.jsonObject = response);
    return this.jsonObject;
  }

  click(audio, id) {
   // this.audioTag = document.createElement('audio');
    this.audioTag.setAttribute('src', audio.audio);
    this.audioTag.load();
   // setTimeout(1000);
    this.audioTag.play();
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;
    this.pageStatusData.total = 10;

    if ( this.pageList[id] && this.audioTag.play() && (this.statDateObjects.correct*100)/this.statDateObjects.total < 100) {
      this.statDateObjects.correct++;
      this.pageList[id] = false;
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
}
