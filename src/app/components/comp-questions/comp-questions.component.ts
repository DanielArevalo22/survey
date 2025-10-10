import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Section } from '../../models/Section';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-comp-questions',
  imports: [],
  templateUrl: './comp-questions.component.html',
  styleUrl: './comp-questions.component.css'
})

export class CompQuestionsComponent {

  @Input()
  section!: Section;
  @Output()
  score = new EventEmitter<number>();
  question: Question[] = [];
  questionsComplementary: string[] = [];
  flag!: boolean;
  selectedScores: { [key: number]: number | null } = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['section']) {
      this.filterComplementary();
      this.selectedScores = {};
    }
  }

  private filterComplementary() {
    this.questionsComplementary = this.section.questions
      .filter(q => q.isPrincipal === 'N')
      .map(q => q.question);
  }

  getScore(questionIndex: number, score: number) {
    this.selectedScores[questionIndex] = score;
    this.score.emit(score);

    if (!this.flag) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
}