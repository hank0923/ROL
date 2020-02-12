import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ApprovalListComponent } from './components/approval-list/approval-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import {CreateNewComponent } from './components/create-new/create-new.component';
import {	LoginComponent } from './components/login/login.component';


const routes: Routes = [
	{path: '', redirectTo: '/all-projects', pathMatch: 'full' },
	{ path: 'all-projects', component: AllProjectsComponent, data: {toolbar: true, footer:true}},
	{ path: 'my-projects', component: MyProjectsComponent, data: {toolbar: true, footer:true} },
	{ path: 'approval-list', component: ApprovalListComponent, data: {toolbar: true, footer:true} },
	{ path: 'project-detail', component: ProjectDetailComponent, data: {toolbar: true, footer:true}},
	{ path: 'create-new', component: CreateNewComponent, data: {toolbar: true, footer:true} },
	{ path: 'login', component: LoginComponent, data: {toolbar: false, footer:false} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
