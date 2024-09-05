import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-mascot',
  standalone: true,
  imports: [],
  templateUrl: './mascot.component.html',
  styleUrl: './mascot.component.css'
})
export class MascotComponent {
  correctAnswer: string = '4c94485e0c21ae6c41ce1dfe7b6bfaceea5ab68e40a2476f50208e526f506080';
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
      this.router.navigate(['../tx']);
    } else if (hashedInput === '1b16b1df538ba12dc3f97edbb85caa7050d46c148134290feba80f8236c83db9') {
      this.wrongAnswerText = "Don't include spaces";
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}