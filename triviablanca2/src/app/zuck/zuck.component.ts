import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-zuck',
  standalone: true,
  imports: [],
  templateUrl: './zuck.component.html',
  styleUrl: './zuck.component.css'
})
export class ZuckComponent {
  correctAnswer: string = '51621d8abc37d29372e1b085482e6acbe1c6dea31f4a5435f7bb0c56d99ca50f';
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
    
    if (hashedInput === this.correctAnswer || hashedInput === '537eeb580b7091faa23363d1dff7f889f871d408f14f9eadcb7c47e8cfa8f339') {
      this.router.navigate(['../victoriousatlast']);
    } else {
      this.wrongAnswerText = 'Nope, try again';
    }
  }  
}
