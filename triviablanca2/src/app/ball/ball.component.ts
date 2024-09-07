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
    } else if (hashedInput === '13f0159f468b7e02da608eafb7931e7c0e4769e8bd887f616687455cc2a824a4') {
      this.wrongAnswerText = 'lol no'
    } else if (hashedInput === 'ba0238fbd311655c86961e45905537ce4a5c3a04756d420dae2fae7f10a03af7' || hashedInput === 'e3c04dfa6e1192a9b21bd2b9565d2b2cd6d316ee6b95a5e0a8eeaaf31b402985') {
      this.wrongAnswerText = "Yes, but not the answer I'm looking for"
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}
