import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css'
})
export class AutoComponent {
  correctAnswer: string = '161f57332026177b9bdb935b89f24b20bcf60398be903e1049693c25b587144e';
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
    
    if (hashedInput === this.correctAnswer || hashedInput === 'f145c8e389810c51c00dc60598db116cc67fb19cc41c54cb9a89a89d7694b746' || hashedInput === '08bf50122b38b768e6d23c7ef1d0422b3f4e763cac9005c199e7aa98584b458d') {
      this.router.navigate(['../victoriousatlast']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
