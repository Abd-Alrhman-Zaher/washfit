import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Domains } from '../data/domains';
import { question } from '../data/question';
import { domainsServices } from '../services/domainsServices';
import { questionServices } from '../services/questionServices';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css']
})
export class AddNewQuestionComponent implements OnInit {

  form: FormGroup= new FormGroup({});
  @ViewChild('fQuestion') questionForm!:NgForm
  qsn!:question;
  x!:any;
  liDomain!: Domains[];
  constructor(private questionServices:questionServices,private domainServices:domainsServices
     ,_qsn:question,private router:Router, private formBuilder: FormBuilder) {
    this.qsn = _qsn
  }
  ngOnInit(): void {
    this.LoadForm();
    this.LoadAllDomains();
    this.FillFormFeilds(this.qsn);
    console.log(this.qsn);
    this.x = localStorage.getItem('language');
  }

  LoadAllDomains() {

    this.domainServices.loadAll().subscribe({
      next:data => {
        this.liDomain = data;
        console.log(data);
      },
      error: e => console.log(e)
    });
  }


  FillFormFeilds(data: question) {

    this.form.controls["domain"].setValue(data.domains_id);
    this.form.controls["questionCode"].setValue(data.question_code);
    this.form.controls["CatgeoryTitle"].setValue(data.category_title_AR);
    this.form.controls["IndictorEn"].setValue(data.indicator_EN);
    this.form.controls["ExplanatoryNotes"].setValue(data.explanatoryNotes_EN);
    this.form.controls["GreenEn"].setValue(data.green_EN);
    this.form.controls["YellowEn"].setValue(data.yellow_EN);
    this.form.controls["RedEn"].setValue(data.red_EN);
    this.form.controls["CatgeoryTitleAr"].setValue(data.category_title_AR);
    this.form.controls["IndictorAr"].setValue(data.indicator_AR);
    this.form.controls["ExplanatoryNotesAr"].setValue(data.explanatoryNotes_AR);
    this.form.controls["GreenAr"].setValue(data.green_AR);
    this.form.controls["YellowAr"].setValue(data.yellow_AR);
    this.form.controls["RedAr"].setValue(data.red_AR);

  }
  LoadForm() {
    this.form = this.formBuilder.group({
      domain:[,{}],
      questionCode:[,{}],
      CatgeoryTitle:[,{}],
      IndictorEn:[,{}],
      ExplanatoryNotes:[,{}],
      GreenEn:[,{}],
      YellowEn:[,{}],
      RedEn:[,{}],
      CatgeoryTitleAr:[,{}],
      IndictorAr:[,{}],
      ExplanatoryNotesAr:[,{}],
      GreenAr:[,{}],
      YellowAr:[,{}],
      RedAr:[,{}],




    })
  }
  onSave(){

    var q = new question();
    q.domains_id = this.form.controls["domain"].value;
    q.question_code = this.form.controls["questionCode"].value;
    q.category_title_EN = this.form.controls["CatgeoryTitle"].value;
    q.indicator_EN = this.form.controls["IndictorEn"].value;
    q.explanatoryNotes_EN =this.form.controls["ExplanatoryNotes"].value;
    q.green_EN = this.form.controls["GreenEn"].value;
    q.yellow_EN = this.form.controls["YellowEn"].value;
    q.red_EN = this.form.controls["RedEn"].value;
    q.category_title_AR =this.form.controls["CatgeoryTitleAr"].value;
    q.indicator_AR = this.form.controls["IndictorAr"].value;
    q.explanatoryNotes_AR =this.form.controls["ExplanatoryNotesAr"].value;
    q.green_AR = this.form.controls["GreenAr"].value;
    q.yellow_AR = this.form.controls["YellowAr"].value;
    q.red_AR = this.form.controls["RedAr"].value;

    this.questionServices.insert(this.form.value).subscribe({
      next:()=>console.log("ok"),
      error:e=>console.log(e)
    })
    location.reload();
  }

  //onChange(){
  //  var q = new question();
  //  q.id = this.questionForm.value["txtId"]
  //  q.question_code = this.questionForm.value["question_code"]
  //  q.category_title_EN = this.questionForm.value["category_title_EN"]
  //  q.Indicator_EN = this.questionForm.value["Indicator_EN"]
  //  q.explanatoryNotes_EN = this.questionForm.value["explanatoryNotes_EN"]
  //  q.green_EN = this.questionForm.value["green_EN"]
  //  q.yellow_EN = this.questionForm.value["yellow_EN"]
  //  q.red_EN = this.questionForm.value["red_EN"]
  //  q.category_title_AR = this.questionForm.value["category_title_AR"]
  //  q.Indicator_AR = this.questionForm.value["Indicator_AR"]
  //  q.explanatoryNotes_AR = this.questionForm.value["ExplanatoryNotes_AR"]
  //  q.green_AR = this.questionForm.value["green_AR"]
  //  q.yellow_AR = this.questionForm.value["yellow_AR"]
  //  q.red_AR = this.questionForm.value["red_AR"]
//
  //  this.questionServices.update(q).subscribe({
  //    next: () => console.log("ok"),
  //    error: e => console.log(e)
  //  })
  //  location.reload();
  //}

  close(){
    this.router.navigate(['/AdminQuestionForm'])
  }
}
