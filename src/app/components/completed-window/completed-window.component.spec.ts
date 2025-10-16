import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWindowComponent } from './completed-window.component';

describe('CompletedWindowComponent', () => {
  let component: CompletedWindowComponent;
  let fixture: ComponentFixture<CompletedWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
