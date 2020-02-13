import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';


import { HeaderComponent } from './components/header/header.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ApprovalListComponent } from './components/approval-list/approval-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateNewComponent } from './components/create-new/create-new.component';

import { QuillModule } from 'ngx-quill'

import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from './components/login/login.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllProjectsComponent,
    MyProjectsComponent,
    ApprovalListComponent,
    ProjectDetailComponent,
    FooterComponent,
    CreateNewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [['bold', 'italic', 'underline'], ['link', 'image'],[{ 'list': 'ordered'}, { 'list': 'bullet' }]]
      },
      theme: 'snow'
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
