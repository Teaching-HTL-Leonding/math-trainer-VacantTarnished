import { Component } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css'],
})
export class ExcerciseComponent {

  constructor(public exerciseService: ExerciseService) { }

  public evalStyle: {[key: string]: string} = {
    'correct': 'color: green',
    'incorrect': 'color: red'
  }
}

