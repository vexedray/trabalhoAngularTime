import { Routes } from '@angular/router';
import { TeamRegistrationComponent } from './team-registration-component/team-registration-component.component';
import { DrawComponent } from './draw-component/draw-component.component';
import { TeamListComponent } from './team-list-component/team-list-component.component';


export const routes: Routes = [
    {
        path: 'team-registration',
        component: TeamRegistrationComponent
    },
    {
        path: 'team-list',
        component: TeamListComponent
    },
    {
        path: 'draw',
        component: DrawComponent
    }
];


