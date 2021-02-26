import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthAdminGuard } from './components/admin/auth-admin.guard';

import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'services', component: ServicesComponent},
  {path: 'technologies', component: TechnologiesComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-panel', component: AdminComponent, canActivate: [AuthAdminGuard]},

  // {path: 'projects', component: ProjectsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
