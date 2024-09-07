import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-tx',
  standalone: true,
  imports: [],
  templateUrl: './tx.component.html',
  styleUrl: './tx.component.css'
})
export class TxComponent {
  correctAnswer: string = '18d0efa72db892c1c8f3b1e42d208b5840849a3057800b5fd0e549cd2a2dd2ec';
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
    
    if (hashedInput === this.correctAnswer || hashedInput === '6c636ca367c932600d6b1debbb0a2f302120fdc72ca6619a886e004e05c90cf8') {
      this.router.navigate(['../16_14_15_5_6_3_13_4_7_9_10_11_12_17_18_8_2_1']);
    } else if (hashedInput === 'b938bde0827e61dc5a8e055bc81210762eb79d1b4fa80826d66f0ca8c22a4f73' || hashedInput == '86fa9ea28ce1daa73704a540456421ba83765e8647d206c0acfb77781464e8ea') {
      this.wrongAnswerText = "On the right track... Where is that?"
    } else if (hashedInput === '92a4abafbf5c677bfa0d17ecb43ccbaaa013c14c2046c71d94b56e2025b019b8' || hashedInput == 'f9fbe2b9ab9b9a04de4ff8f15384a8750594a521d1094af76987bf039b948192') {
      this.wrongAnswerText = "Good idea, but that's the wrong one."
    } else {
      this.wrongAnswerText = 'Nope, try again. Format is Numbers Street (1234 ABC Drive)';
    }
  }  
}
