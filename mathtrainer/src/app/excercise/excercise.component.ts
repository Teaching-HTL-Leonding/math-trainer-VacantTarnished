import { Component } from '@angular/core';
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css'],
})
export class ExcerciseComponent {

  constructor(public settings: SettingsService) { }

  public questionStrings: string[] = []
  public questionAnswers: number[] = []
  public answerToQuestion: number[] = []
  public evaluations: string[] = []
  public evalStyle: {[key: string]: string} = {
    'correct': 'color: green',
    'incorrect': 'color: red'
  }


  public evaluate(): void {
    for (let i = 0; i < this.questionAnswers.length; ++i) {
      if (this.questionAnswers[i] === this.answerToQuestion[i]) {
        this.evaluations[i] = 'correct'
      } else {
        this.evaluations[i] = 'incorrect'
      }
    }
  }

  public newQuestions(): void {
    this.questionStrings = []
    this.questionAnswers = []

    let operator: (string | undefined) = undefined

    for (let i = 0; i < this.settings.amountOfQuestions; ++i) {
      let randomOperator: number = Math.floor(Math.random() * this.settings.operators.length)

      let numOne = 0;
      let numTwo = 0;

      while (!this.settings.selectedOperators[randomOperator]) {
        randomOperator = Math.floor(Math.random() * this.settings.operators.length)
        console.log(randomOperator)
      }

      while (numOne === 0) {
        numOne = Math.floor(Math.random() * Math.pow(10, this.settings.amountOfDigits));
      }

      while (numTwo === 0) {
        numTwo = Math.floor(Math.random() * Math.pow(10, this.settings.amountOfDigits));
      }

      operator = this.settings.operators[randomOperator]

      this.questionStrings[i] = `${numOne} ${operator} ${numTwo} =`

      switch(operator) {
        case '+':
          this.questionAnswers[i] = numOne + numTwo
          break;
        case '-':
          this.questionAnswers[i] = numOne - numTwo
          if (this.questionAnswers[i] < 0) {
            --i;
          }
          break;
        case '/':
          this.questionAnswers[i] = numOne / numTwo
          if (this.questionAnswers[i] % 2 !== 0) {
            --i;
          }
          break;
        case '*':
          this.questionAnswers[i] = numOne * numTwo
          break;
      }
    }
  }

  public hasAllAnswers(): boolean {
    if (this.answerToQuestion.length !== this.questionAnswers.length) {
      return false;
    }

    for (let i = 0; i < this.answerToQuestion.length; ++i) {
      if (this.answerToQuestion[i] === undefined) {
        return false;
      }
    }

    return true;
  }
}

