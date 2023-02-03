import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { categories } from '../data/categories';
import { question } from '../data/question';
import { Answer } from '../data/Answer';
import { categoriesServices } from '../services/categoriesServices';
import { questionServices } from '../services/questionServices';
import { AnswerServices } from '../services/AnswerServices';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {
  liquestion!: question[];
  licategories!: categories[];
  liAnswer!: Answer[];
  @ViewChild('f') Form!: NgForm;
  x!:any;
  userName!:any;
  newArray: any = [];
  constructor(private questionServices:questionServices,private answerServices:AnswerServices
    ,private categoriesServices:categoriesServices) { }

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
    this.answerServices.loadAll().subscribe({
      next:data => {
        this.liAnswer = data;
        console.log(data);
        this.x = localStorage.getItem('language');
      },
      error: e => console.log(e)
    })
     this.userName = localStorage.getItem('userName');
     console.log(this.userName);
  }

  onOptionsSelected(id: number) {
    const date = new Date();

    for (let i = 0; i < this.newArray.length; i++) {
      if (id == this.newArray[i].Question_id) {
        this.newArray[i] = parseInt(this.Form.value["ddl"]);
      }
    }
    this.questionServices.loadbyid(id).subscribe({
      next: data => {
        var A = new Answer();
        A.User_id = this.userName;
        A.Answers_Date_Time = date;
        A.Score = parseInt(this.Form.value["ddl"]);
        A.Question_id = data.id;
        A.question_code = data.question_code;
        A.flag = false;
        this.newArray.push(A)
        console.log(this.newArray);
      },
      error: e => console.log(e)
    })
  }

  onsubmit() {
    debugger
    for (let i = 0; i < this.newArray.length; i++) {
      this.answerServices.insert(this.newArray[i]).subscribe({
        next: () => console.log("ok"),
        error: e => console.log(e)
      })
    }
    location.reload();
  }

  onChange() {
    const date = new Date();

    this.answerServices.loadAll().subscribe({
      next: data => {
        debugger
        for (let i = 0; i < data.length; i++) {
          for (let y = 0; y < this.newArray.length; y++) {
            if (data[i].user_id == this.userName && data[i].question_code == this.newArray[y].question_code) {
              var A = new Answer();
              A.id = data[i].id;
              A.User_id = this.userName;
              A.Answers_Date_Time = data[i].Answers_Date_Time;
              A.Score = this.newArray[y].Score;
              A.question_code = this.newArray[y].question_code;
              A.flag = true;
              this.answerServices.update(A).subscribe({
                next: () => console.log("ok"),
                error: e => console.log(e)
              })
            }
          }
        }
      },
      error: e => console.log(e)
    })
    location.reload();
  }
}
