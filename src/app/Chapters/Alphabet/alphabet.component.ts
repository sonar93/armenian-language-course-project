import {Component, OnInit} from '@angular/core';
import {Data} from '../../shared/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'alphabet',
    templateUrl: './alphabet.component.html',
    styleUrls: ['../style.component.scss']
})
export class Alphabet implements OnInit {

    BrowserDetect = {
        init() {
            this.browser = this.searchString(this.dataBrowser) || 'Other';
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'Unknown';
        },
        searchString(data) {
            for (let i = 0; i < data.length; i++) {
                const dataString = data[i].string;
                this.versionSearchString = data[i].subString;

                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            }
        },
        searchVersion(dataString) {
            const index = dataString.indexOf(this.versionSearchString);
            if (index === -1) {
                return;
            }

            const rv = dataString.indexOf('rv:');
            if (this.versionSearchString === 'Trident' && rv !== -1) {
                return parseFloat(dataString.substring(rv + 3));
            } else {
                return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
            }
        },

        dataBrowser: [
            {string: navigator.userAgent, subString: 'Edge', identity: 'MS Edge'},
            {string: navigator.userAgent, subString: 'MSIE', identity: 'Explorer'},
            {string: navigator.userAgent, subString: 'Trident', identity: 'Explorer'},
            {string: navigator.userAgent, subString: 'Firefox', identity: 'Firefox'},
            {string: navigator.userAgent, subString: 'Opera', identity: 'Opera'},
            {string: navigator.userAgent, subString: 'OPR', identity: 'Opera'},

            {string: navigator.userAgent, subString: 'Chrome', identity: 'Chrome'},
            {string: navigator.userAgent, subString: 'Safari', identity: 'Safari'}
        ],

        browser: ''
    };

    constructor(private jsonData: Data, private route: ActivatedRoute,
        private router: Router) {
    }

    bv;


    ngOnInit() {
        this.BrowserDetect.init();
        this.getMenueState();
    }

    ngAfterViewInit() {
        this.BrowserDetect.init();
        this.bv = this.BrowserDetect.browser;
        console.log(this.bv);
        const speech = document.getElementById('li-3');
        if (this.bv === 'Chrome') {
            speech.style.display = `block`;
        }
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
            lesson: 'Sound and letter',
            url: 'Sound-Letter-Word',
            id: '1'

        },
        {
            lesson: 'Listen and repeat.',
            url: 'Listen-and-Repeat',
            id: '2'
        },
        {
            lesson: 'Practice Your Speech',
            url: 'web-speech',
            id: '3'
        },
    ];

    menuExShort: any = [
        {
            exercise: 'Listen and select',
            url: 'Exercise-1',
            id: '3'
        },
        {
            exercise: 'Listen and select',
            url: 'Exercise-2',
            id: '4'
        },
        {
            exercise: 'Match letter cases',
            url: 'Exercise-3',
            id: '5'
        },
    ];

    menuEx: any = [
        {
            exercise: 'Listen and select',
            url: 'Exercise-1',
            id: '3'
        },
        {
            exercise: 'Listen and select',
            url: 'Exercise-2',
            id: '4'
        },
        {
            exercise: 'Match letter cases',
            url: 'Exercise-3',
            id: '5'
        },
        {
            exercise: 'Select the correct image',
            url: 'Exercise-4',
            id: '6'
        },
        {
            exercise: 'Listen and practice.',
            url: 'Exercise-5',
            id: '7'
        },
        {
            exercise: 'Build the correct word',
            url: 'Exercise-6',
            id: '8'
        },
        {
            exercise: 'Insert the letter',
            url: 'Exercise-7',
            id: '9'
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
            response => { this.itemsStatisticsData = response;
            console.log(response); });
        return;
    }
}

