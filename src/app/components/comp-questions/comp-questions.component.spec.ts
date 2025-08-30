import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompQuestionsComponent } from './comp-questions.component';

describe('CompQuestionsComponent', () => {
  let component: CompQuestionsComponent;
  let fixture: ComponentFixture<CompQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
