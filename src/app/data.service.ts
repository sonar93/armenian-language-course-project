import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Tip, Status} from './tip';
import {TipsComponent} from './tips/tips.component';
import {MatDialog} from '@angular/material';

export interface Config {
  url: string;
}

let pathtodir = window.location.pathname;
pathtodir = pathtodir.substring(0, pathtodir.indexOf('/language_res'));
const Web_url = 'https://www.avc-agbu.org/edu/avc_dictionary/jsonResponce/';

@Injectable()
export class data {

  constructor(private httpClient: HttpClient,  public dialog: MatDialog) {
  }

  getJson(course_id, lesson_id, item_id) {
    const url = 'https://www.avc-agbu.org/edu/avc_dictionary/jsonResponce/getJsonData.php?type=data&course_id=' + course_id + '&lesson_id=' + lesson_id + '&item_id=' + item_id;
    console.log(url);
    return this.httpClient.get(url);
  }

  setNotes(type, course_id, notes ) {
    const url = `${Web_url}saveJsonData.php?type=${type}&course_id=${course_id}&notes=${notes}`;
    console.log(url);
    return this.httpClient.get(url);
  }

  getNotes(type, course_id) {
    const url = `${Web_url}getJsonData.php?type=${type}&course_id=${course_id}`;
    return this.httpClient.get(url);
  }

  getTipsJson(course_id, lesson_id, item_id) {
    const url = 'https://www.avc-agbu.org/edu/avc_dictionary/jsonResponce/getJsonData.php?type=tips&course_id=' + course_id + '&lesson_id=' + lesson_id + '&item_id=' + item_id;
    console.log(url);
    return this.httpClient.get(url);
  }


  submitStatus(unit_name, item_name, type, pageStatusData) {
    const parameters = 'ajax=1' +
      '&unit_info[unit_name]=' + unit_name +
      '&unit_info[item_name]=' + item_name +
      '&unit_info[type]=' + type +
      '&is_first=' + pageStatusData.submits_count +
      '&page_number=' + pageStatusData.pageNumber +
      '&statusData[correct]=' + pageStatusData.correct +
      '&statusData[incorrect]=' + pageStatusData.incorrect +
      '&statusData[total]=' + pageStatusData.total;

    const url = Web_url + 'saveData.php' + '?' + parameters;
    return this.httpClient.get(url);
  }

  getItemsStatisticsData(unit_name) {

    let items = '';
    for (let i = 0; i < 25; i++) {
      items += '&items[]=' + i;
    }
    const parameters = 'ajax=1&complete=1&unit_name=' + unit_name + items;
    const url = Web_url + 'getData.php' + '?' + parameters;
    return this.httpClient.get(url);
  }

  openDialog() {
    const dialogRef = this.dialog.open(TipsComponent, {
    });
    dialogRef.afterClosed().subscribe(result => setTimeout(() => this.dialog = result, 0));
  }

  showTip(tips, cond, array, unit_name, item_name) {
    console.log("=============================")
    console.log(tips, cond, array, unit_name, item_name);

    const arrayTips = tips;
    const state = <Status>cond;
    let breakFlag = false;
    for (const tip of arrayTips){
      const i = <Tip>tip;
        switch (i.condition) {
          case 'last_one_time':
            if (state.correct + state.incorrect === state.total && (array.indexOf(i.id) === -1)) {
              this.dialog.open(TipsComponent, {
                data: i.tips
              });
              this.setTips(unit_name, item_name, i.id).subscribe(response => console.log(response));
              breakFlag = true;
              console.log(i.incorrect);
            }
            break;
          case 'last':
            if (state.correct + state.incorrect === state.total) {
              this.dialog.open(TipsComponent, {
                data: i.tips
              });
              breakFlag = true;
            }
            break;
          case 'situation':
            if (state.correct === i.correct &&  state.incorrect === i.incorrect) {
              this.dialog.open(TipsComponent, {
                data: i.tips
              });
              breakFlag = true;
            }
            break;
          case 'each':
            this.dialog.open(TipsComponent, {
              data: i.tips
            });
          //  this.openDialog();
            breakFlag = true;
            break;
        }
        if (breakFlag) {
          break;
        }
    }
  }



  showFirst(tips, cond, array, unit_name, item_name) {
    const arrayTips = tips;
    const state = <Status>cond;
    let breakFlag = false;
    // console.log(arrayTips);
    for (const tip of arrayTips){
      const i = <Tip>tip;
      switch (i.condition) {
        case 'first_one_time':
          if (state.correct === 0 && state.incorrect === 0 && (array.indexOf(i.id) === -1)) {
            this.dialog.open(TipsComponent, {
              data: i.tips
            });
            this.setTips(unit_name, item_name, i.id).subscribe(response => console.log(response));
            breakFlag = true;
          }
          break;
        case 'first':
          if (state.correct === 0 && state.incorrect === 0) {
            this.dialog.open(TipsComponent, {
              data: i.tips
            });
            breakFlag = true;
          }
          break;
      }
      if (breakFlag) {
        break;
      }
    }
  }


  getTipsId(unit_name, item_name) {
    const parameters = 'type=tips&unit_info[unit_name]=' + unit_name +
      '&unit_info[item_name]=' + item_name;
    const url = Web_url + 'getData.php' + '?' + parameters;
    console.log(url);
    return this.httpClient.get(url);
  }

  setTips(unit_name, item_name, id) {
    const parameters = 'type=tips&unit_info[unit_name]=' + unit_name +
      '&unit_info[item_name]=' + item_name + '&tips_id=' + id;
    const url = Web_url + 'saveData.php' + '?' + parameters;
    console.log(url);
    return this.httpClient.get(url);
  }
}
