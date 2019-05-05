import { Routes } from "@angular/router";
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';

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
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'sidebar',
        component: SidebarComponent
    }
];
