import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  public digits : number[] = [1,2,3,4]
  public questions: number[] = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  public operators: string[] = ['+', '-', '*', '/']
  public selectedOperators: boolean[] = [true,true,true,true]
  public amountOfDigits: number = 1
  public amountOfQuestions: number = 10
}
