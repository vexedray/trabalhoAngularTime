import { Component, OnInit } from '@angular/core';
import { TeamService, Team } from '../services/service';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-list',
  imports: [CommonModule],
  templateUrl: './team-list-component.component.html',
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }
}