import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {FormComponent} from "./form/form.component";
import {FormQuestionComponent} from "./form-question/form-question.component";
import {AdminQuestionFormComponent} from "./admin-question-form/admin-question-form.component";
import {AddNewQuestionComponent} from "./add-new-question/add-new-question.component";

const routes: Routes = [
  {path:"",component:SignInComponent},
  {path:"form",component:FormComponent},
  {path:"FormQuestion",component:FormQuestionComponent},
  {path:"AdminQuestionForm",component:AdminQuestionFormComponent},
  {path:"AddNewQuestion",component:AddNewQuestionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
