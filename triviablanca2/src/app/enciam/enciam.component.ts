import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-enciam',
  standalone: true,
  imports: [],
  templateUrl: './enciam.component.html',
  styleUrl: './enciam.component.css'
})
export class EnciamComponent {
  correctAnswer: string = '09e5dd826947a6cb9446912185009c5a8ad4455a0ce1d5681366ebc1e8b8c456';
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
      this.router.navigate(['../jack']);
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}

