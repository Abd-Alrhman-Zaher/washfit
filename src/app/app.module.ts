import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {JwtModule} from '@auth0/angular-jwt'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { accountServices } from './services/accountServices';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/AuthGuard';
import { FormComponent } from './form/form.component';
import { categoriesServices } from './services/categoriesServices';
import { FormQuestionComponent } from './form-question/form-question.component';
import { questionServices } from './services/questionServices';
import { AnswerServices } from './services/AnswerServices';
import { AdminQuestionFormComponent } from './admin-question-form/admin-question-form.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';
import { question } from './data/question';
import { domainsServices } from './services/domainsServices';
import { ReactiveFormsModule } from '@angular/forms'
const appRoutes:Routes=[
  {path:"",component:SignInComponent},
  {path:"form",component:FormComponent},
  {path:"FormQuestion",component:FormQuestionComponent},
  {path:"AdminQuestionForm",component:AdminQuestionFormComponent},
  {path:"AddNewQuestion",component:AddNewQuestionComponent}
]
export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}
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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [accountServices,
  categoriesServices,
  AnswerServices,
  questionServices,
  question,
  domainsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
