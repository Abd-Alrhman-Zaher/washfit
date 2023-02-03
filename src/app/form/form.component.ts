import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  lang(){
    localStorage.setItem('language',"AR")
  }
  lang2(){
    localStorage.setItem('language',"EN")
  }
  QuestionForm(){
    this.router.navigate(['/FormQuestion'])
  }
}
