import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-farrier',
  standalone: true,
  imports: [],
  templateUrl: './farrier.component.html',
  styleUrl: './farrier.component.css'
})
export class FarrierComponent {
  correctAnswer: string = '1efeede3ed0f3e3ba8b85d965f97406523678d4c38e698e2881be41bfd8d8510';
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
      this.router.navigate(['../farrier']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}