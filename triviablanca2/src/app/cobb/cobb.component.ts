import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-cobb',
  standalone: true,
  imports: [],
  templateUrl: './cobb.component.html',
  styleUrl: './cobb.component.css'
})
export class CobbComponent {
  correctAnswer: string = '652f2df4644862c8c071391d84e159480e27acf2e2475b7e0d8268797e06d4eb';
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
    this.wrongAnswerText = "";
    
    if (hashedInput === this.correctAnswer) {
      this.router.navigate(['../010']);
    } else if (hashedInput === '84cf62eedd2d8b5d670b055cd778116aac1dc919ce83d843feeb2f9d70dd4156') {
      this.wrongAnswerText = "Good idea, but no.";
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}

