import { Component } from '@angular/core';

import { Header } from '../../component/header/header'
import { Footer } from '../../component/footer/footer'

@Component({
    selector: 'app-page-not-found',
    imports: [
        Header,
        Footer,
    ],
    templateUrl: './page-not-found.html',
    styleUrl: './page-not-found.css',
})
export class PageNotFound {

}
