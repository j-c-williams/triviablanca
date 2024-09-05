import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-loleina',
  standalone: true,
  imports: [],
  templateUrl: './loleina.component.html',
  styleUrl: './loleina.component.css'
})
export class LoleinaComponent {
  correctAnswer: string = '225aa693fef91da1dfb6c60e6c2df213836775155a4ce756ac6b55402cf96d59';
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
      this.router.navigate(['../estevao']);
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}