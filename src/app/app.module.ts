import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in/sign-in.component';

import {FormsModule} from '@angular/forms';
import {accountServices} from './services/accountServices';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {categoriesServices} from './services/categoriesServices';
import {FormQuestionComponent} from './form-question/form-question.component';
import {questionServices} from './services/questionServices';
import {AnswerServices} from './services/AnswerServices';
import {AdminQuestionFormComponent} from './admin-question-form/admin-question-form.component';
import {AddNewQuestionComponent} from './add-new-question/add-new-question.component';
import {question} from './data/question';
import {domainsServices} from './services/domainsServices';
import {ReactiveFormsModule} from '@angular/forms'
import {AppRoutingModule} from "./app-routing.module";
import {JwtInterceptor} from "./core/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FormQuestionComponent,
    AdminQuestionFormComponent,
    AddNewQuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    accountServices,
    categoriesServices,
    AnswerServices,
    questionServices,
    question,
    domainsServices,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
