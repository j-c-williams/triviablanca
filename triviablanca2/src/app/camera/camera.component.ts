import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  correctAnswer: string = 'd7c37eeedcb929ef59e110481ed670ccedc093879cadb936db4b42d00c7374a3';
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
      this.router.navigate(['../ball']);
    } else if (hashedInput === 'bce8a58122cfb87468bd1abeb9cf4c61c130af941f323761c73de2e3b3fce1d6') {
      this.wrongAnswerText = "Close, but you're missing something"
    } else {
      this.wrongAnswerText = "Nope, try again"
    }
  }
}
