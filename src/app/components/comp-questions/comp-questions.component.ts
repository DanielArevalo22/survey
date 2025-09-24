import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
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
  section! : Section;
  question : Question[] = [];
  questionsComplementary : string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['section']) {
      this.filterComplementary();
    }
  }

   private filterComplementary() {
    this.questionsComplementary = this.section.questions
      .filter(q => q.isPrincipal === 'N')
      .map(q => q.question);
  }
}