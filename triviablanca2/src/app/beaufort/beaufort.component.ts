import { Component } from '@angular/core';

@Component({
  selector: 'app-beaufort',
  standalone: true,
  imports: [],
  templateUrl: './beaufort.component.html',
  styleUrl: './beaufort.component.css'
})
export class BeaufortComponent {
  wrongAnswerText: string = ''
  checkAnswer(inputValue: string) {
    console.log(inputValue)
    console.log('lol not here dawg')
    this.wrongAnswerText = "Nope, try again"
  }
}
