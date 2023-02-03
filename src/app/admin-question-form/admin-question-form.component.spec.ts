import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionFormComponent } from './admin-question-form.component';

describe('AdminQuestionFormComponent', () => {
  let component: AdminQuestionFormComponent;
  let fixture: ComponentFixture<AdminQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuestionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
