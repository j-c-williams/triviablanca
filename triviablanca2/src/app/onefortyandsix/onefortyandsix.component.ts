import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-onefortyandsix',
  standalone: true,
  imports: [],
  templateUrl: './onefortyandsix.component.html',
  styleUrl: './onefortyandsix.component.css'
})
export class OnefortyandsixComponent {
  correctAnswer: string = '4f278cdddf52263fe21c64c94932f2b2ec316acecd39a7adcc01eb2e6592a678';
  wrongAnswerText: string = ''
  
  constructor(private router: Router) {
  }

  checkAnswer(inputValue: string) {
    const sanitizedInput = inputValue.trim().toLowerCase().replace(/\s+/g, '');
    const hashedInput = CryptoJS.SHA256(sanitizedInput).toString(CryptoJS.enc.Hex);
    this.wrongAnswerText = ""
        
    if (hashedInput === this.correctAnswer) {
      console.log('Correct answer!');
      this.router.navigate(['../rot17']);
    } else {
      console.log('Incorrect answer.');
      this.wrongAnswerText = "Nope, try again"
    }
  }
}

