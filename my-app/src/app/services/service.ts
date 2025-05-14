import { Injectable } from '@angular/core';

export interface Team {
  name: string;
  logoUrl: string;
}

@Injectable({ providedIn: 'root' })
export class TeamService {
  private teams: Team[] = [];

  addTeam(team: Team) {
    this.teams.push(team);
  }

  getTeams(): Team[] {
    return [...this.teams];
  }
} 
