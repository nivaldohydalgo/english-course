import { Component , Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-button-day',
    imports: [
        RouterLink,
    ],
    templateUrl: './button-day.html',
    styleUrl: './button-day.css',
})
export class ButtonDay {

    @Input({ required: true }) day!: string;

}
