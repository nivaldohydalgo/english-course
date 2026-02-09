import { Component , OnInit } from '@angular/core';

import { ButtonDay } from '../../component/button-day/button-day'
import { Header } from '../../component/header/header'
import { Footer } from '../../component/footer/footer'

import { environment } from '../../config-app'

@Component({
    selector: 'app-home',
    imports: [
        ButtonDay,
        Header,
        Footer
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {
    qtDays!: number

    ngOnInit() {
        this.qtDays = environment.qtDays
    }
}
