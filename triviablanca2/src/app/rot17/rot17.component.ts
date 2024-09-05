import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-rot17',
  standalone: true,
  imports: [],
  templateUrl: './rot17.component.html',
  styleUrl: './rot17.component.css'
})
export class Rot17Component {
  correctAnswer: string = '3c6aa9b7b9cdc7328d2bc05f911ef805ba22cda7df0d58b5cfd9bb0dcafc802e';
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
      this.router.navigate(['../contrahumanidad']);
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}
