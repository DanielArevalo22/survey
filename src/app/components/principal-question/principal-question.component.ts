import { Component, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
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
  section! : Section
  @Input()
  survey! : string
  @Output()
  score = new EventEmitter<number>();
  question : Question[] = [];
  principalQ : string = '';
  numeros: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['section']) {
      this.principalQ = this.principal();
      this.numeros = Array.from({ length: 10 }, (_, i) => i + 1);
    }
  }
  
  ngOnInit(){
    this.principalQ = this.principal();
    this.numeros = Array.from({ length: 10 }, (_, i) => i + 1);
  }

  principal() : string{
    this.question = this.section.questions;
    for(let i = 0 ; i < this.question.length; i++){
      const isP = this.question[i];
      if(isP.isPrincipal.match('Y')){
        return isP.question;
      }else{
        break;
      }
    }
    return '';
  }

  captureScore(i : number){
    this.score.emit(i);
  }
}