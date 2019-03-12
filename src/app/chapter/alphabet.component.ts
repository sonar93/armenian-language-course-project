import {Component, OnInit} from '@angular/core';
import {data} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'alphabet',
    templateUrl: './alphabet.component.html',
    styleUrls: ['./style.component.scss']
})
export class Alphabet implements OnInit {

    speech = document.getElementById('li-3')
    isWebkit = 'WebkitAppearance' in document.documentElement.style;
    if(isWebkit){
        this.speech.style.display = `block`;
    }

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
            lesson: "Sound and letter",
            url: "Sound-Letter-Word",
            id: "1"

        },
        {
            lesson: "Listen and repeat.",
            url: "Listen-and-Repeat",
            id: "2"
        },
        {
            lesson: "Practice Your Speech",
            url: "web-speech",
            id: "3"
        },
    ];

    menuExShort: any = [
        {
            exercise: "Listen and select",
            url: "Exercise-1",
            id: "3"
        },
        {
            exercise: "Listen and select",
            url: "Exercise-2",
            id: "4"
        },
        {
            exercise: "Match letter cases",
            url: "Exercise-3",
            id: "5"
        },
    ]

    menuEx: any = [
        {
            exercise: "Listen and select",
            url: "Exercise-1",
            id: "3"
        },
        {
            exercise: "Listen and select",
            url: "Exercise-2",
            id: "4"
        },
        {
            exercise: "Match letter cases",
            url: "Exercise-3",
            id: "5"
        },
        {
            exercise: "Select the correct image",
            url: "Exercise-4",
            id: "6"
        },
        {
            exercise: "Listen and practice.",
            url: "Exercise-5",
            id: "7"
        },
        {
            exercise: "Build the correct word",
            url: "Exercise-6",
            id: "8"
        },
        {
            exercise: "Insert the letter",
            url: "Exercise-7",
            id: "9"
        }
    ]

    viewAll(){
        let ex = document.getElementById('ex')
        let exShort = document.getElementById('ex-short')
        let viewText = document.getElementById('view')
        let expand = document.getElementById('expand')
        //console.log(exShort.style.display)
        if(ex.style.display === 'none' || ex.style.display === ''){
            expand.textContent = 'expand_less'
            viewText.textContent = 'View less'
            ex.style.display = 'flex'
            exShort.style.display = 'none'
        } else if(exShort.style.display === 'none' || exShort.style.display === ''){
            expand.textContent = 'expand_more'
            viewText.textContent = 'View more'
            exShort.style.display = 'flex'
            ex.style.display = 'none'
        }
    }

    getMenueState() {
        this.jsonData.getItemsStatisticsData(this.unit_name).subscribe(
            response =>{ this.itemsStatisticsData = response;
            console.log(response)});
        return;
    }
}

