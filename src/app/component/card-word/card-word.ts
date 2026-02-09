import { Component , Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-card-word',
  imports: [],
  templateUrl: './card-word.html',
  styleUrl: './card-word.css',
})
export class CardWord {
    types!: []
    examples!: []
    synonyms!: []

    @Input({ required: true }) word!: any;

    ngOnInit() {

        if (this.word.types != '') {
            this.types = this.word.types.split('|');
        }

        if (this.word.examples != '') {
            this.examples = this.word.examples.split('|');
        }

        if (this.word.synonyms != '') {
            this.synonyms = this.word.synonyms.split('|');
        }

    }
}
