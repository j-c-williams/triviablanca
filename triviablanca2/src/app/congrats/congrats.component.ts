import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congrats',
  standalone: true,
  imports: [],
  templateUrl: './congrats.component.html',
  styleUrl: './congrats.component.css'
})
export class CongratsComponent {
  constructor(private router: Router) {}

  restartGame() {
    this.router.navigate(['../yuba'])
  }

  sendToLeaderboard() {
    this.router.navigate(['../leaderboard'])
  }
}
