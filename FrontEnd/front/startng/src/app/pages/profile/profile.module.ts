import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { JobComponent } from './job/job.component';
import { TimeOffComponent } from './time-off/time-off.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';

export const routes = [
  {
      path: '', 
      component: ProfileComponent,
      children:[
        { path: '', redirectTo: 'profile', pathMatch: 'full'},
        { path: 'projects', component: ProjectsComponent, data: { breadcrumb: 'Projects' } },
        { path: 'user-info', component: UserInfoComponent, data: { breadcrumb: 'User Information' } },
        {path: "my-documents", component: MyDocumentsComponent},
        {path: "time-off", component: TimeOffComponent},
        {path: "job", component: JobComponent},
      ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent, 
    ProjectsComponent, 
    UserInfoComponent, JobComponent, TimeOffComponent, MyDocumentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
