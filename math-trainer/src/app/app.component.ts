import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public digits : number[] = [1,2,3,4]
  public questions: number[] = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  public operators: string[] = ['+', '-', '*', '/']
  public selectedOperators: boolean[] = [true,true,true,true]
  public amountOfDigits: number = 1
  public amountOfQuestions: number = 10
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
    console.log(this.amountOfDigits);
    console.log(this.amountOfQuestions);
    for (let i = 0; i < this.operators.length; ++i) {
      if (this.selectedOperators[i] === true) {
        console.log(this.operators[i]);
      }
    }

    this.questionStrings = []
    this.questionAnswers = []


    let operator: (string | undefined) = undefined

    for (let i = 0; i < this.amountOfQuestions; ++i) {
      let numOne = Math.floor(Math.random() * Math.pow(10, this.amountOfDigits));
      let numTwo = Math.floor(Math.random() * Math.pow(10, this.amountOfDigits));
      let randomOperator = Math.floor(Math.random() * this.operators.length)

      while (!this.selectedOperators[randomOperator]) {
        randomOperator = Math.floor(Math.random() * this.operators.length)
      }
      operator = this.operators[randomOperator]

      this.questionStrings[i] = `${i + 1}. Q: ${numOne} ${operator} ${numTwo} =`

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
}
