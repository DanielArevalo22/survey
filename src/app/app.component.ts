import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { CompQuestionsComponent } from "./components/comp-questions/comp-questions.component";
import { PrincipalQuestionComponent } from "./components/principal-question/principal-question.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalQuestionComponent, CompQuestionsComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'survey';
}
