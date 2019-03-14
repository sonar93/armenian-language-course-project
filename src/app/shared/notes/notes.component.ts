import {Component, OnInit, ElementRef} from '@angular/core';
import {Data} from '../data.service';
import {ColorPickDirective} from './color-pick.directive';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {

  userNote: any = [];
  course_id = 'AL_102';
  type = 'notes';
  title: any;
  note: any;
  id: any;
  constructor(private data: Data, private elementRef:ElementRef) {
  }

  ngOnInit() {
    this.getUserNote();
  }

  setUserNote() {
    const notes = JSON.stringify(this.userNote);
    this.data.setNotes(this.type, this.course_id, notes).subscribe(
      response => console.log("OK") );
    return;
  }

  getUserNote() {
    this.data.getNotes(this.type, this.course_id).subscribe(
      response => { if ( response !== null) {this.userNote = response}; this.userNote.reverse()});
    return;
  }
  color: any = ['#3F51B5', '#009688', '#9C27B0', '#FF5722', '#E91E63'];

  setNote() {
    this.userNote.reverse();
    this.userNote.push({'title': this.title, 'note': this.note, 'color': ''});
    this.userNote.reverse();
    this.setUserNote();
  }



  saveNote(id) {
    const check = document.getElementById('check');
    console.log(id);
    const back = document.getElementById(id).style.background;
    this.userNote[id].color = back;
    this.setUserNote();
    check.style.color = 'white';
  }

  setColor (id, color) {
    const card = document.getElementById(id);
    card.style.background = color;
    this.saveNote(id);
  }

  removeNote(index) {
    this.userNote.splice(index, 1);
    this.setUserNote();
  }

  sortNotes() {
      const sortedArray = this.userNote.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }

    colorPick(event) {
      let target = event.target || event.srcElement || event.currentTarget;
      let idAttr = target.attributes.id;
      let none = document.getElementById('btn-row');
      if (none.style.opacity === ''){
        none.style.opacity = '1';
      } else if ( none.style.opacity === '1') {
        none.style.opacity = '';
      }
    }

    check() {
      const check = document.getElementById('check');
      check.style.color = 'red';
    }
}
