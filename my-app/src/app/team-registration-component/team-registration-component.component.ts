import { Component } from '@angular/core';
import { TeamService, Team } from '../services/service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-registration',
  imports: [CommonModule, FormsModule],
  templateUrl: './team-registration-component.component.html',
})
export class TeamRegistrationComponent {
  teamName = '';
  logoUrl = '';

  constructor(private teamService: TeamService) {}

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => (this.logoUrl = e.target.result);
    reader.readAsDataURL(file);
  }

  registerTeam(): void {
    if (this.teamName && this.logoUrl) {
      this.teamService.addTeam({ name: this.teamName, logoUrl: this.logoUrl });
      this.teamName = '';
      this.logoUrl = '';
    }
  }
}
