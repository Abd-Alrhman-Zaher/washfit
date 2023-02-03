import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('fQuestion') questionForm!:NgForm
  qsn!:question;
  liDomain!: Domains[];
  constructor(private questionServices:questionServices,private domainServices:domainsServices
     ,_qsn:question,private router:Router) { 
    this.qsn = _qsn
  }
  ngOnInit(): void {
   this.domainServices.loadAll().subscribe({
    next:data => {
      this.liDomain = data;
      console.log(data);
    },
    error: e => console.log(e)
  })
  console.log(this.qsn);
  }
  
  onSave(){
    
    var q = new question();
    q.domains_id = parseInt(this.questionForm.value["ddl"])
    q.question_code = this.questionForm.value["question_code"]
    q.category_title_EN = this.questionForm.value["category_title_EN"]
    q.indicator_EN = this.questionForm.value["Indicator_EN"]
    q.explanatoryNotes_EN = this.questionForm.value["explanatoryNotes_EN"]
    q.green_EN = this.questionForm.value["green_EN"]
    q.yellow_EN = this.questionForm.value["yellow_EN"]
    q.red_EN = this.questionForm.value["red_EN"]
    q.category_title_AR = this.questionForm.value["category_title_AR"]
    q.indicator_AR = this.questionForm.value["Indicator_AR"]
    q.explanatoryNotes_AR = this.questionForm.value["ExplanatoryNotes_AR"]
    q.green_AR = this.questionForm.value["green_AR"]
    q.yellow_AR = this.questionForm.value["yellow_AR"]
    q.red_AR = this.questionForm.value["red_AR"]

    this.questionServices.insert(q).subscribe({
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
