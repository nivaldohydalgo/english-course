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

        console.log(this.word)
        if (this.word.types != '' && this.word.types != undefined && this.word.types != null ) {
            this.types = this.word.types.split('|');
        }

        if (this.word.examples != '' && this.word.examples != undefined && this.word.examples != null ) {
            this.examples = this.word.examples.split('|');
        }

        if (this.word.synonyms != '' && this.word.synonyms != undefined && this.word.synonyms != null ) {
            this.synonyms = this.word.synonyms.split('|');
        }

    }
}
