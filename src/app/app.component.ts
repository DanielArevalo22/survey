import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { CompQuestionsComponent } from "./components/comp-questions/comp-questions.component";
import { PrincipalQuestionComponent } from "./components/principal-question/principal-question.component";
import { Survey } from './models/Survey';
import { SurveyService } from './services/survey.service';

@Component({
  selector: 'app-root',
  imports: [ PrincipalQuestionComponent, CompQuestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'survey';
  currentIndex : number = 0;
  survey : Survey = {
      idSurvey : 0,
      survey : '',
      sections : [],
      nameParticipant : '',
      idParticipant : ''
  }


  constructor(private surveyService : SurveyService){}

  ngOnInit() : void{
    this.loadSurvey();
  }

  
  public loadSurvey(){
    this.surveyService.getSurvey('shop').subscribe({
      next: (resp) => {
        this.survey = resp.data;
      },
      error : (err) => {
        return err;
      }
    })
  }

    nextQuestion() {
      if (this.currentIndex < this.survey.sections.length - 1) {
        this.currentIndex++;
        console.log(this.currentIndex);
        console.log('SAPE');
      }
    }

    prevQuestion() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        console.log(this.currentIndex);
        console.log('Retrocediendo sección');
      }
    }
}