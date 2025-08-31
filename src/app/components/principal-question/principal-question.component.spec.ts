import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalQuestionComponent } from './principal-question.component';

describe('PrincipalQuestionComponent', () => {
  let component: PrincipalQuestionComponent;
  let fixture: ComponentFixture<PrincipalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
