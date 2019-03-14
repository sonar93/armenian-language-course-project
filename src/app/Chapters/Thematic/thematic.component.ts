import { Component, OnInit } from '@angular/core';
import {Data} from '../data.service';
@Component({
    selector: 'thematic',
    templateUrl: './thematic.component.html',
    styleUrls: ['./style.component.scss']
})
export class Thematic implements OnInit {

    constructor(private jsonData: Data) { }

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
            lesson: "Introducing and greeting",
            url: "Thematic-Words-and-Greetings",
            id:"16"
        }
    ];
    menuEx: any = [
        {
            exercise: "Listen and practice",
            url: "Listen-and-Repeat",
            id:"17"
        },
        {
            exercise: "Match Expressions",
            url: "Exercise-2",
            id:"18"
        },
        {
            exercise: "Listen and translate.",
            url: "Exercise-3",
            id:"19"
        }
    ];
    getMenueState() {
        this.jsonData.getItemsStatisticsData(this.unit_name).subscribe(
            response => this.itemsStatisticsData = response);
        return;
    }
}
