import { Component, OnInit } from "@angular/core";
import { data } from "../../data.service";
import { HttpModule } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dialogue-les",
  templateUrl: "./dialogue-les.component.html",
  styleUrls: ["./dialogue-les.component.scss"]
})
export class DialogueLesComponent implements OnInit {
  constructor(private jsonData: data) {}

  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "20";
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

  jsonObject: any = {
    title: "Dialogue",
    help:
      "<p>Listen to the dialogue&nbsp;and repeat it to improve your Armenian pronunciation.</p>",
    info:
      "<p>The use of dialogues will help you develop your listening and speaking skills. In this activity you will practice new words and phrases for greeting and introduction. <br></p>",
    page: {
      video:
        "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/20/video/1_.mp4",
      video_poster:
        "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/20/images/video.png",
      track: [
        {
          vtt:
            "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/20/vtt/dialogue1_subtitles_en.vtt",
          label: "English"
        },
        {
          vtt:
            "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/20/vtt/dialogue1_subtitles_trans.vtt",
          label: "Transliteration"
        }
      ]
    }
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
    this.pageStatusData.total = 1;

    this.setStatistics();
    for (let i = 0; i < this.pageList.length; i++) {
      this.pageList[i] = true;
    }
  }

  click() {
    this.audioTag = document.getElementById("vid");
    this.audioTag.play();
    this.pageStatusData.submits_count++;
    this.pageStatusData.submits_count++;
    this.pageStatusData.correct = 1;
    this.pageStatusData.incorrect = 0;
    this.audioTag.onended = () => {
     // console.log("kk");
      if (this.pageList[0]) {
        this.pageList[0] = false;
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
    };
  }

  statDateObjects: any = { correct: 0, incorrect: 0, total: 1 };
  pageList: boolean[] = new Array(this.statDateObjects.total);

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
    let course_id = "AL_102";
    let lesson_id = "Lesson_1";
    let item_id = "20";
    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));
    return this.jsonObject;
  }
}
