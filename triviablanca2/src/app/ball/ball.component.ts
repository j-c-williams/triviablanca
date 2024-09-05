import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-ball',
  standalone: true,
  imports: [],
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.css'
})
export class BallComponent {
  correctAnswer: string = '1db86b49e70d80e4e6f34cc112d3dd94b8f756a1fade7840c36004477626064a';
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
      this.router.navigate(['../loleina']);
    } else if (hashedInput === 'f02c96357481972443a2eb6d2861c803fa7790fb7d0225b2f54b6beba964f4ad') {
      this.wrongAnswerText = "Different kind of splash"
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}
