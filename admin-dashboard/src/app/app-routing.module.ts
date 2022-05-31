import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"clients", component:ClientsComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"meeting", component:MeetingComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
