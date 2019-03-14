import { Component, OnInit } from '@angular/core';
import {Data} from '../../shared/data.service';

@Component({
    selector: 'dialogue',
    templateUrl: './dialogue.component.html',
    styleUrls: ['../style.component.scss']
})
export class Dialogue implements OnInit {

    constructor(private  jsonData: Data) { }

    ngOnInit() {
        this.getMenueState();
    }
    unit_name = 'AL_102-Lesson_1';
    itemsStatisticsData: any =
        {
            'status': 1,
            'msg': '',
            'activityStat': {}
        };

    menuLes: any = [
        {
            lesson: 'Dialogue',
            url: 'Dialogue',
            id: '20'
        }
    ];

    menuExShort: any = [
        {
            exercise: 'Listen and match',
            url: 'Exercise-1',
            id: '21'
        },
        {
            exercise: 'Build sentences',
            url: 'Exercise-2',
            id: '22'
        },
        {
            exercise: 'Listen and repeat',
            url: 'Exercise-3',
            id: '23'
        },
    ];

    menuEx: any = [
        {
            exercise: 'Listen and match',
            url: 'Exercise-1',
            id: '21'
        },
        {
            exercise: 'Build sentences',
            url: 'Exercise-2',
            id: '22'
        },
        {
            exercise: 'Listen and repeat',
            url: 'Exercise-3',
            id: '23'
        },
        {
            exercise: 'Listen and complete',
            url: 'Exercise-4',
            id: '24'
        }
    ];

    viewAll(){
        const ex = document.getElementById('ex');
        const exShort = document.getElementById('ex-short');
        const viewText = document.getElementById('view');
        const expand = document.getElementById('expand');
        //console.log(exShort.style.display)
        if (ex.style.display === 'none' || ex.style.display === ''){
            expand.textContent = 'expand_less';
            viewText.textContent = 'View less';
            ex.style.display = 'flex';
            exShort.style.display = 'none';
        } else if (exShort.style.display === 'none' || exShort.style.display === ''){
            expand.textContent = 'expand_more';
            viewText.textContent = 'View more';
            exShort.style.display = 'flex';
            ex.style.display = 'none';
        }
    }

    getMenueState() {
        this.jsonData.getItemsStatisticsData(this.unit_name).subscribe(
            response => this.itemsStatisticsData = response);
        return;
    }
}
