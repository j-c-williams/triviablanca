import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-estevao',
  standalone: true,
  imports: [],
  templateUrl: './estevao.component.html',
  styleUrl: './estevao.component.css'
})
export class EstevaoComponent {
  correctAnswer: string = '70c238e4c30cbf06e18852d597396da0600c1a46bf975225225a8de992a531aa';
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
      this.router.navigate(['../landing']);
    } else if (hashedInput === '0f12e4c8a32b102cd666495f21fdbc806e32f019fd8086e6bec812b847be1753' || hashedInput == 'f6a40c3046820cd95f982200b5084910449eb35cfdebd2ee56b8ee577b981772') {
      this.wrongAnswerText = "Not the one I'm looking for";
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
