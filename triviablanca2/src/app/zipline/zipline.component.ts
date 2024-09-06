import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-zipline',
  standalone: true,
  imports: [],
  templateUrl: './zipline.component.html',
  styleUrl: './zipline.component.css'
})
export class ZiplineComponent {
  correctAnswer: string = '8cc5512fa361d4e0374b4503d9de17e27c4bb670c3a932657ff8123adf1e035d';
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
      this.router.navigate(['../auto']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
