import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-anagram',
  standalone: true,
  imports: [],
  templateUrl: './anagram.component.html',
  styleUrl: './anagram.component.css'
})
export class AnagramComponent {
  correctAnswer: string = '550b8ce3d164393f314eb1ba5a8cc74face29b90f9c94242c7182c448aa6a4c1';
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
        
    if (hashedInput === this.correctAnswer || hashedInput === 'ab45e8474269b026f668d49860b36850122e18a50d5ea38f3fefdae08261865c') {
      this.router.navigate(['../farrier']);
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}
