import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-yuba',
  standalone: true,
  imports: [],
  templateUrl: './yuba.component.html',
  styleUrl: './yuba.component.css'
})
export class YubaComponent {
  correctAnswer: string = '10d2058fa101d6ab76d394de4f672d9fadef1f4c8e7eda88e38b58fa8158cc3e';
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
      this.router.navigate(['../jan']);
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}
