import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { categories } from '../data/categories';
import { Domains } from '../data/domains';
import { question } from '../data/question';
import { categoriesServices } from '../services/categoriesServices';
import { domainsServices } from '../services/domainsServices';
import { questionServices } from '../services/questionServices';

@Component({
  selector: 'app-admin-question-form',
  templateUrl: './admin-question-form.component.html',
  styleUrls: ['./admin-question-form.component.css']
})
export class AdminQuestionFormComponent implements OnInit {
  //@ViewChild('f') questionForm!:NgForm
  @ViewChild('f') domainForm!:NgForm
  liquestion!: question[];
  licategories!: categories[];
  popup: boolean = false
  
  x!:any;
  qsn!:question;
  constructor(private questionServices:questionServices,private categoriesServices:categoriesServices,
    _qsn:question,private domainsServices:domainsServices,private router:Router) { 
      this.qsn = _qsn
    }

  ngOnInit(): void {
    this.questionServices.loadAll().subscribe({
      next:data => {
        this.liquestion = data;
        console.log(data);
        this.x = localStorage.getItem('language');
      },
      error: e => console.log(e)
    })
    this.categoriesServices.loadAll().subscribe({
      next: data => {
        this.licategories = data;
        console.log(data);
      },
      error: e => console.log(e)
    })
  }
  AddQuestion(){
    this.router.navigate(['/AddNewQuestion'])
  }
  showPopup() {
    this.popup = true
    
  }

  closePopup() {
    this.popup = false
  }
  onSave(){
    var d = new Domains();
    d.domain_Name_EN = this.domainForm.value["domain_Name_EN"]
    d.domain_Name_AR = this.domainForm.value["domain_Name_AR"]
    this.domainsServices.insert(d).subscribe({
      next:()=>console.log("ok"),
      error:e=>console.log(e)
    })
    location.reload();
  }
  getData(id:number){
    this.questionServices.loadbyid(id).subscribe({
      next:data => {
        console.log(data);
        this.qsn.id = data.id;
        this.qsn.question_code = data.question_code;
        this.qsn.category_title_EN = data.category_title_EN;
        this.qsn.indicator_EN = data.indicator_EN;
        this.qsn.explanatoryNotes_EN = data.explanatoryNotes_EN;
        this.qsn.green_EN = data.green_EN;
        this.qsn.yellow_EN = data.yellow_EN;
        this.qsn.red_EN = data.red_EN;
        this.qsn.category_title_AR = data.category_title_AR;
        this.qsn.indicator_AR = data.indicator_AR;
        this.qsn.explanatoryNotes_AR = data.explanatoryNotes_AR;
        this.qsn.green_AR = data.green_AR;
        this.qsn.yellow_AR = data.yellow_AR;
        this.qsn.red_AR = data.red_AR;
        this.qsn.domains_id=data.domains_id;
        console.log(this.qsn);
        this.router.navigate(['/AddNewQuestion'])
      },
      error:e => console.log(e)      
    })
    
  }

  onDelete(id: number){
    
    this.questionServices.delete(id).subscribe({
      next: data => {
        console.log(data);
      },
      error: e => console.log(e)
    })
    location.reload();
  }
}
