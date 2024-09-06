import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-the-maker',
  standalone: true,
  imports: [],
  templateUrl: './the-maker.component.html',
  styleUrl: './the-maker.component.css'
})
export class TheMakerComponent {
  correctAnswer: string = '7de2b63db2696e27faf1b381cd30c83fdddc89dc4d6aa7f21d1900fe3bdf8a32';
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
    
    if (hashedInput === this.correctAnswer || hashedInput === 'ca6b085cd219df225ad5d78c0351bd5b714f062786c473d474bab4d6ce2db7fb' || hashedInput === '53aa8ee216324262c38b6ecea6f79ae9251632f5dead0cb50240c036ae362cf7') {
      this.router.navigate(['../farrier']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}

