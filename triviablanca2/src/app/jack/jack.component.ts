// jack.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-jack',
  standalone: true,
  templateUrl: './jack.component.html',
  styleUrls: ['./jack.component.css']
})
export class JackComponent implements OnInit {
  correctAnswer: string = '216e1e3f8fed804bf3c16a8f9dac7d25fd4902b7277828729dcceb797c8c1ddc';
  wrongAnswerText: string = '';

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
    this.wrongAnswerText = '';

    if (hashedInput === this.correctAnswer) {
      console.log('Correct answer!');
      this.router.navigate(['../school']);
    } else {
      console.log('Incorrect answer.');
      this.wrongAnswerText = 'Nope, try again';
    }
  }
}
