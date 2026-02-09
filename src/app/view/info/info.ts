import { Component } from '@angular/core';

import { Header } from '../../component/header/header'
import { Footer } from '../../component/footer/footer'

@Component({
    selector: 'app-info',
    imports: [
        Header,
        Footer,
    ],
    templateUrl: './info.html',
    styleUrl: './info.css',
})
export class Info {

}
