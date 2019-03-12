import { Component, OnInit, OnDestroy } from '@angular/core';
import { data } from '../data.service';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {

  constructor(private jsonData: data) { }

  jsonObject: any = {
    item: []
  };

  course_id = "AL_102";
  lesson_id = "Lesson_1";
  item_id = "25";

  click(audio) {
    let audioTag = document.createElement('audio');
    audioTag.setAttribute('src', audio.audio);
    audioTag.load();
    audioTag.play();
  }

  ngOnInit() {
    this.setData();
  }

  setData(){
    this.jsonData.getJson(this.course_id,this.lesson_id,this.item_id).subscribe(
      response => this.jsonObject = response);
    return this.jsonObject;
  }

  ngOnDestroy() {

  }

/*  jsonObject:any = {
    "title": "Vocabulary",
    "unitID": "AL_103",
    "itemID": "28",
    "type": "lesson",
    "item": [
      {
        "text": "ներկայացե՛ք / ներկայանալ ",
        "trans": "/ to introduce /",
        "translit": " nerkayacek, nerkayanal",
        "audio": "assets/9.4/media/audio/1.mp3"
      },
      {
        "text": "որտե՞ղ ",
        "trans": "/ where? /",
        "translit": " vortex?",
        "audio": "assets/9.4/media/audio/2.mp3"
      },
      {
        "text": "ապրել ",
        "trans": "/ to live /",
        "translit": " aprel",
        "audio": "assets/9.4/media/audio/3.mp3"
      },
      {
        "text": "ծանոթացե՛ք / ծանոթանալ",
        "trans": "/ to meet /",
        "translit": " tzanotacek, tzanotanal",
        "audio": "assets/9.4/media/audio/4.mp3"
      },
      {
        "text": "ցանկանում եմ/ցանկանալ",
        "trans": "/ to wish / ",
        "translit": " tsankanum em, tsankanal",
        "audio": "assets/9.4/media/audio/5.mp3"
      },
      {
        "text": "բարով ես եկել /բարով եք եկել",
        "trans": "/ welcome /",
        "translit": "barov esd ekel, barov ek ekel",
        "audio": "assets/9.4/media/audio/6.mp3"
      },
      {
        "text": "եկել / գալ ",
        "trans": "/ to come /",
        "translit": " ekel / gal",
        "audio": "assets/9.4/media/audio/7.mp3"
      },
      {
        "text": "հայր ",
        "trans": "/ father /",
        "translit": " hayr",
        "audio": "assets/9.4/media/audio/8.mp3"
      },
      {
        "text": "մայր ",
        "trans": "/ mather /",
        "translit": " mayr",
        "audio": "assets/9.4/media/audio/9.mp3"
      },
      {
        "text": "ազգանուն ",
        "trans": "/ surname, second name /",
        "translit": "azganun",
        "audio": "assets/9.4/media/audio/10.mp3"
      },
      {
        "text": "տարեկան ",
        "trans": "/ years old /",
        "translit": " tarekan",
        "audio": "assets/9.4/media/audio/11.mp3"
      },
      {
        "text": "իհարկե ",
        "trans": "/ sure /",
        "translit": " of course",
        "audio": "assets/9.4/media/audio/12.mp3"
      },
      {
        "text": "այո՛ ",
        "trans": "/ ayo /",
        "translit": "yes",
        "audio": "assets/9.4/media/audio/13.mp3"
      },
      {
        "text": "ո՛չ (չէ՛) ",
        "trans": "/ no /",
        "translit": "voch/che",
        "audio": "assets/9.4/media/audio/14.mp3"
      },
      {
        "text": "քսան ",
        "trans": "/ twenty /",
        "translit": "ksan",
        "audio": "assets/9.4/media/audio/15.mp3"
      },
      {
        "text": "ծառ ",
        "trans": "/ tree /",
        "translit": " tzar",
        "audio": "assets/9.4/media/audio/16.mp3"
      },
      {
        "text": "մատիտ ",
        "trans": "/ pencil /",
        "translit": " matit",
        "audio": "assets/9.4/media/audio/17.mp3"
      },
      {
        "text": "գիրք ",
        "trans": "/ book /",
        "translit": " girk",
        "audio": "assets/9.4/media/audio/18.mp3"
      },
      {
        "text": "աղջիկ ",
        "trans": "/ girl /",
        "translit": " aghjik",
        "audio": "assets/9.4/media/audio/19.mp3"
      },
      {
        "text": "սեղան ",
        "trans": "/ table /",
        "translit": " seghan",
        "audio": "assets/9.4/media/audio/20.mp3"
      },
      {
        "text": "աթոռ ",
        "trans": "/ chair /",
        "translit": " ator",
        "audio": "assets/9.4/media/audio/21.mp3"
      },
      {
        "text": "պայուսակ ",
        "trans": "/ chair /",
        "translit": " payusak",
        "audio": "assets/9.4/media/audio/22.mp3"
      }
    ]
  }; */
}
