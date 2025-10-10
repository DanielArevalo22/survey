import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';
import { Section } from '../../models/Section';

@Component({
  selector: 'app-principal-question',
  imports: [],
  templateUrl: './principal-question.component.html',
  styleUrl: './principal-question.component.css'
})
export class PrincipalQuestionComponent {

  @Input()
  section!: Section
  @Input()
  survey!: string
  @Output()
  score = new EventEmitter<number>();
  question: Question[] = [];
  principalQ: string = '';
  numeros: number[] = [];
  selectedScore: number | null = null; // Cambié a null para mejor control
  flag: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['section']) {
      this.principalQ = this.principal();
      this.numeros = Array.from({ length: 10 }, (_, i) => i + 1);
      this.selectedScore = null;
      this.flag = false;
    }
  }

  ngOnInit() {
    this.principalQ = this.principal();
    this.numeros = Array.from({ length: 10 }, (_, i) => i + 1);
  }

  principal(): string {
    this.question = this.section.questions;
    for (let i = 0; i < this.question.length; i++) {
      const isP = this.question[i];
      if (isP.isPrincipal.match('Y')) {
        return isP.question;
      } else {
        break;
      }
    }
    return '';
  }

  captureScore(i: number) {
    this.selectedScore = i;
    this.score.emit(i);
    if (!this.flag) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
}