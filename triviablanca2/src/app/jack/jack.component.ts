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
      this.router.navigate(['../cobb']);
    } else if (hashedInput === '222b0bd51fcef7e65c2e62db2ed65457013bab56be6fafeb19ee11d453153c80' || hashedInput === 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d') {
      this.wrongAnswerText = "Close, but you're missing something"
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }
}
