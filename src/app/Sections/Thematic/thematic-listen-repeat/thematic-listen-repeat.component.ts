import { Component, OnInit } from "@angular/core";
import { Data } from "../../../shared/data.service";
import { HttpModule } from "@angular/http";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-thematic-listen-repeat",
  templateUrl: "./thematic-listen-repeat.component.html",
  styleUrls: ["./thematic-listen-repeat.component.css"]
})
export class ThematicListenRepeatComponent implements OnInit {
  constructor(private jsonData: Data) {}
  jsonObject: any = {
    title: "Exercise 1: Listen and practice",
    help: "<p>Listen and practice<br></p>",
    info:
      "<p>Listen to the dialogue carefully and try to repeat it to improve your Armenian pronunciation.&nbsp;<br></p><!--EndFragment--><p>   </p>",
    page: {
      video_url:
        "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/17/video/dialog_1.mp4",
      video_poster:
        "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/17/images/dialog.jpg",
      vtt:
        "https://www.avc-agbu.org/edu/avc_json_editor/AL_102/Lesson_1/17/vtt/dialogue1_subtitles_trans.vtt",
      label: "Transliteration"
    }
  };

  submits_count: any;
  course_id: string = "AL_102";
  lesson_id: string = "Lesson_1";
  unit_name: string = "AL_102-Lesson_1";
  item_name: string = "17";
  type: string = "lesson";
  audioTag: any;
  index: any;
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

  pageStatusData: any = {
    submits_count: 0,
    pageNumber: 0,
    correct: 0,
    incorrect: 0,
    total: 0
  };

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
      if (this.pageList[0]) {
        this.pageList[0] = false;
        this.statDateObjects.correct++;
        this.setStatistics();
      }
    };
    this.jsonData.showTip(
      this.jsonTipsObject.tips,
      this.statDateObjects,
      this.tipsArray,
      this.unit_name,
      this.item_name
    );
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
    let item_id = "17";

    this.jsonData
      .getJson(course_id, lesson_id, item_id)
      .subscribe(response => (this.jsonObject = response));

    return this.jsonObject;
  }

  /*
  jsonObject:any = {
    "root": {
      "title": "Exercise 1: Listen and repeat",
      "lesson": "Exercise 1",
      "unitID": "AL_103",
      "itemID": "17",
      "type": "lesson",
      "page": {
        "number": "1",
        "audio_mp3": "assets/17/media/audio/dialog.mp3",
        "video": "assets/17/media/video/dialogue.mp4",
        "video_poster": "assets/17/media/image/dialog.jpg",
        "track": [
          {
            "file_url": "assets/17/media/video/textTracks/dialogue1_subtitles_wa.vtt",
            "lang": "wa",
            "label": "WA Chapters",
            "kind": "chapters",
            "default": "true"
          },
          {
            "file_url": "assets/17/media/video/textTracks/dialogue1_subtitles_wa.vtt",
            "lang": "wa",
            "label": "WA Subtitles",
            "kind": "subtitles",
            "default": "true"
          },
          {
            "file_url": "assets/17/media/video/textTracks/dialogue1_subtitles_trans.vtt",
            "lang": "en",
            "label": "Transliteration",
            "kind": "subtitles"
          }
        ]
      }
    }
  };
*/
}
