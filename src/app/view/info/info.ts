import { Component } from '@angular/core';

import { Header } from '../../component/header/header'

@Component({
    selector: 'app-info',
    imports: [
        Header,
    ],
    templateUrl: './info.html',
    styleUrl: './info.css',
})
export class Info {

}
