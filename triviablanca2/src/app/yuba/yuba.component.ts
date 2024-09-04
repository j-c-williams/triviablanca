import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-yuba',
  standalone: true,
  imports: [],
  templateUrl: './yuba.component.html',
  styleUrl: './yuba.component.css'
})
export class YubaComponent {
  correctAnswer: string = '10d2058fa101d6ab76d394de4f672d9fadef1f4c8e7eda88e38b58fa8158cc3e';
  wrongAnswerText: string = ''
  
  constructor(private router: Router) {
  }

  checkAnswer(inputValue: string) {
    const sanitizedInput = inputValue.trim().toLowerCase().replace(/\s+/g, '');
    const hashedInput = CryptoJS.SHA256(sanitizedInput).toString(CryptoJS.enc.Hex);
    this.wrongAnswerText = ""
        
    if (hashedInput === this.correctAnswer) {
      console.log('Correct answer!');
      this.router.navigate(['../jan']);
    } else {
      console.log('Incorrect answer.');
      this.wrongAnswerText = "Nope, try again"
    }
  }
}
