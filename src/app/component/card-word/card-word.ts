import { Component , Input , OnInit } from '@angular/core';

@Component({
    selector: 'app-card-word',
    imports: [],
    templateUrl: './card-word.html',
    styleUrl: './card-word.css',
})
export class CardWord {
    traductions!: []
    classes!: []
    examples!: []

    @Input({ required: true }) word!: any;

    ngOnInit() {

        if (this.word.traduction != '' && this.word.traduction != undefined && this.word.traduction != null ) {
            this.traductions = this.word.traduction.split('|');
        }

        if (this.word.class != '' && this.word.class != undefined && this.word.class != null ) {
            this.classes = this.word.class.split('|');
        }

        if (this.word.example != '' && this.word.example != undefined && this.word.example != null ) {
            this.examples = this.word.example.split('|');
        }


    }
}
