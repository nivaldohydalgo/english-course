import { Component, OnInit , inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

import { CardWord } from '../../component/card-word/card-word'
import { Header } from '../../component/header/header'
import { Footer } from '../../component/footer/footer'

import { environment } from '../../config-app'

@Component({
    selector: 'app-learn-day',
    imports: [
        RouterLink,
        CardWord,
        Header,
        Footer,
    ],
    templateUrl: './learn-day.html',
    styleUrl: './learn-day.css',
})
export class LearnDay implements OnInit {
    private http = inject(HttpClient);
    day: any;
    numberDay!: number
    words: any;
    urlJson!: string;
    firstDay: boolean = false;
    lastDay: boolean = false;
    validDay: boolean = true;
    previousDay!: number
    nextDay!: number

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.route.paramMap.subscribe(params => {
            const d = params.get('day');
            this.carregarDados(d); 
        });
        
    }
    
    carregarDados(d: string | null) {

        this.day = d
        this.numberDay = Number(d)

        if ( this.numberDay <= environment.qtDays && this.numberDay > 0 ) {
            this.validDay = true
            this.urlJson = 'assets/days/day_' + this.day + '.json'
            console.log(this.urlJson)

            this.http.get(this.urlJson).subscribe({
                next: response => { this.words = response; },
                error: () => { this.words = []; }
            });
            console.log(this.words)
        
            if ( this.numberDay == 1 ) {
                this.firstDay = true
            } else {
                this.firstDay = false
                this.previousDay = this.numberDay - 1
            }
    
            if ( this.numberDay == environment.qtDays ) {
                this.lastDay = true
            } else {
                this.lastDay = false
                this.nextDay = this.numberDay + 1
            }
        } else {
            this.firstDay = true
            this.lastDay = true
            this.validDay = false
        }

    }

}
