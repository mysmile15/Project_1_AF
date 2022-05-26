import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { MeetingViewComponent } from './components/meeting/meeting-view/meeting-view.component';
import { MeetingCreateComponent } from './components/meeting/meeting-create/meeting-create.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { ClientProfileComponent } from './components/clients/client-profile/client-profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { ProjectViewComponent } from './components/projects/project-view/project-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    MeetingComponent,
    MeetingViewComponent,
    MeetingCreateComponent,
    ClientsComponent,
    ClientCreateComponent,
    ClientProfileComponent,
    ProjectsComponent,
    ProjectCreateComponent,
    ProjectViewComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
