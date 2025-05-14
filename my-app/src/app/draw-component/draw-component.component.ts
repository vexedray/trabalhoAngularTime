import { Component } from '@angular/core';
import { TeamService, Team } from '../services/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-draw',
  imports: [CommonModule],
  templateUrl: './draw-component.component.html',
})
export class DrawComponent {
  pairs: { team1: Team, team2: Team }[] = [];

  constructor(private teamService: TeamService) {}

  shuffleTeams() {
    const shuffled = [...this.teamService.getTeams()].sort(() => Math.random() - 0.5);
    this.pairs = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      this.pairs.push({
        team1: shuffled[i],
        team2: shuffled[i + 1] || { name: 'Sem adversário', logoUrl: '' }
      });
    }
  }
}