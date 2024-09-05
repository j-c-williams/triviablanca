import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-jan',
  standalone: true,
  imports: [],
  templateUrl: './jan.component.html',
  styleUrl: './jan.component.css'
})
export class JanComponent {
  correctAnswer: string = 'e86421cb8ca428710814b0043f32a46d18d7caecc1a04620c34dce3057091dc7';
  wrongAnswerText: string = ''
  
  @ViewChild('answerInput') answerInput!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.answerInput.nativeElement.focus();
    });
  }

  checkAnswer(inputValue: string) {
    const sanitizedInput = inputValue.trim().toLowerCase().replace(/\s+/g, '');
    const hashedInput = CryptoJS.SHA256(sanitizedInput).toString(CryptoJS.enc.Hex);
    this.wrongAnswerText = ""
        
    if (hashedInput === this.correctAnswer) {
      console.log('Correct answer!');
      this.router.navigate(['../140.6']);
    } else {
      console.log('Incorrect answer.');
      this.wrongAnswerText = "Nope, try again"
    }
  }
}

