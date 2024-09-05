import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-contra-humanidad',
  standalone: true,
  imports: [],
  templateUrl: './contra-humanidad.component.html',
  styleUrl: './contra-humanidad.component.css'
})
export class ContraHumanidadComponent {
  correctAnswer: string = 'cff2c2ff3dc8c3541322e1f0041dbc687189b44fac25992d85e8456910d8f026';
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
      this.router.navigate(['../enciam']);
    } else if (hashedInput === '2da4c58b26425bc00d7ab5a89131093e84d4273ecac791d5c905814bb6656a8a') {
      this.wrongAnswerText = "The ...";
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
