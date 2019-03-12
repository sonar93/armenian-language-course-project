import {Component, OnInit} from '@angular/core';
import {data} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'alphabet',
    templateUrl: './voc.component.html',
    styleUrls: ['./style.component.scss']
})
export class Vocabulary implements OnInit {

    constructor(private jsonData: data, private route: ActivatedRoute,
        private router: Router) {
    };

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
            lesson: "Vocabulary",
            url: "Vocabulary",
            id: "1"

        },
        {
            lesson: "Practice Your Speech",
            url: "web-speech",
            id: "2"
        },
    ];


    // viewAll(){
    //     let ex = document.getElementById('ex')
    //     let exShort = document.getElementById('ex-short')
    //     let viewText = document.getElementById('view')
    //     let expand = document.getElementById('expand')
    //     //console.log(exShort.style.display)
    //     if(ex.style.display === 'none' || ex.style.display === ''){
    //         expand.textContent = 'expand_less'
    //         viewText.textContent = 'View less'
    //         ex.style.display = 'flex'
    //         exShort.style.display = 'none'
    //     } else if(exShort.style.display === 'none' || exShort.style.display === ''){
    //         expand.textContent = 'expand_more'
    //         viewText.textContent = 'View more'
    //         exShort.style.display = 'flex'
    //         ex.style.display = 'none'
    //     }
    // }

    getMenueState() {
        this.jsonData.getItemsStatisticsData(this.unit_name).subscribe(
            response =>{ this.itemsStatisticsData = response;
            console.log(response)});
        return;
    }
}

