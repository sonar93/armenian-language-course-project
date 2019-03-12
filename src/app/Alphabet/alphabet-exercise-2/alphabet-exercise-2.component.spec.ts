import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetExercise2Component } from './alphabet-exercise-2.component';

describe('AlphabetExercise2Component', () => {
  let component: AlphabetExercise2Component;
  let fixture: ComponentFixture<AlphabetExercise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetExercise2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetExercise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
