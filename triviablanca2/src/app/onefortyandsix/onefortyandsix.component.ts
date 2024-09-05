import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-onefortyandsix',
  standalone: true,
  imports: [],
  templateUrl: './onefortyandsix.component.html',
  styleUrl: './onefortyandsix.component.css'
})
export class OnefortyandsixComponent {
  correctAnswer: string = '4f278cdddf52263fe21c64c94932f2b2ec316acecd39a7adcc01eb2e6592a678';
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
      this.router.navigate(['../rot17']);
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}

