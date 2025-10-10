import { Component } from '@angular/core';
import { CompQuestionsComponent } from "./components/comp-questions/comp-questions.component";
import { PrincipalQuestionComponent } from "./components/principal-question/principal-question.component";
import { Survey } from './models/Survey';
import { SurveyService } from './services/survey.service';
import { Scores } from './models/Scores';

@Component({
  selector: 'app-root',
  imports: [PrincipalQuestionComponent, CompQuestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'survey';
  i: number = 0
  currentIndex: number = 0;
  survey!: Survey;
  scoreBody!: Scores;
  private compIndexMap: { [sectionId: number]: number } = {};

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.loadSurvey();
  }


  public loadSurvey() {
    this.surveyService.getSurvey('shop').subscribe({
      next: (resp) => {
        this.survey = resp.data;
        this.buildScoreBody();
      },
      error: (err) => {
        return err;
      }
    })
  }

  nextQuestion() {
    if (this.currentIndex < this.survey.sections.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  buildScoreBody(): void {
    this.scoreBody = {
      idSurvey: this.survey.idSurvey,
      nameParticipant: this.survey.nameParticipant,
      idParticipant: this.survey.idParticipant,
      sections: this.survey.sections.map(section => ({
        idSection: section.idSection,
        questions: section.questions.map(q => ({
          idQuestion: q.idQuestion,
          question: q.question,
          isPrincipal: q.isPrincipal,
          score: 0
        }))
      }))
    };
  }

  sendSurvey() {
    const payload = this.scoreBody;
    this.surveyService.postSurvey(payload).subscribe({
      next: (res) => {
        console.log('Status survey ---> ', res);
      },
      error : (error) => {
        console.log('Error saving survey --> ', error);
      }
    });
  }

  getScorePrincipal(score: number): void {
    const currentSectionScore = this.scoreBody.sections[this.currentIndex];
    const principalQuestion = currentSectionScore.questions.find(q => q.isPrincipal === 'Y');
    if (principalQuestion) {
      principalQuestion.score = score;
    }
  }

  getScoreComp(score: number): void {
    const currentSection = this.scoreBody.sections[this.currentIndex];
    const sectionId = currentSection.idSection;
    const complementarias = currentSection.questions.filter(q => q.isPrincipal !== 'Y');
    
    if (this.compIndexMap[sectionId] === undefined) {
      this.compIndexMap[sectionId] = 0;
    }

    const index = this.compIndexMap[sectionId];

    if (index < complementarias.length) {
      complementarias[index].score = score;
      this.compIndexMap[sectionId]++;
    } else {
      console.warn(`Ya se asignaron todos los scores en sección ${sectionId}`);
    }
  }




}