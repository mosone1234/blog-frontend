import { Routes } from "@angular/router";
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashborad',
        pathMatch: 'full'   
    },
    {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar'
    },
    {
        path: 'dashborad',
        component: DashboardComponent,
    }
];
