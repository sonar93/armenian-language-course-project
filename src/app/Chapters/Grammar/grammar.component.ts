import { Component, OnInit } from '@angular/core';
import {Data} from '../data.service';
@Component({
    selector: 'grammar',
    templateUrl: './grammar.component.html',
    styleUrls: ['./style.component.scss']
})
export class Grammar implements OnInit {

    constructor(private jsonData: Data) { };

    ngOnInit() {
        this.getMenueState();
    }

    unit_name: string = "AL_102-Lesson_1";
    itemsStatisticsData: any =
        {
            "status": 1,
            "msg": "",
            "activityStat": {}
        };

    menuLes: any = [
        {
          lesson: 'Personal Pronouns',
          url: 'Personal-Pronouns',
          id: "10"
        },
        {
            lesson: '"To be" in present',
            url: 'Auxiliary-Verb-in-Present-Tense',
            id: "11"
        },
        {
          lesson: '"To be" in use',
          url: 'Pronoun-and-Auxiliary-Verb-in-use',
          id: "12"
      }
    ];
    menuEx: any = [
        {
            exercise: 'Type the pronoun',
            url: 'Exercise-1',
            id: "13"
        },
        {
            exercise: 'Select the correct option',
            url: 'Exercise-2',
            id: "14"
        },
        {
            exercise: 'Type the pronoun',
            url: 'Exercise-3',
            id: "15"
        }
    ];

    viewAll(){
        let ex = document.getElementById('ex');
        let exShort = document.getElementById('ex-short');
        let viewText = document.getElementById('view');
        let expand = document.getElementById('expand');
        //console.log(exShort.style.display)
        if(ex.style.display === 'none' || ex.style.display === ''){
            expand.textContent = 'expand_less';
            viewText.textContent = 'View less';
            ex.style.display = 'flex';
            exShort.style.display = 'none'
        } else if(exShort.style.display === 'none' || exShort.style.display === ''){
            expand.textContent = 'expand_more';
            viewText.textContent = 'View more';
            exShort.style.display = 'flex';
            ex.style.display = 'none'
        }
    }
    getMenueState() {
        this.jsonData.getItemsStatisticsData(this.unit_name).subscribe(
            response => this.itemsStatisticsData = response);
        return;
    }
}
