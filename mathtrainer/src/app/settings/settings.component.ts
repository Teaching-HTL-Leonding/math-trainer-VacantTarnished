import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(public settings: SettingsService) { }

  public canUncheck(operator: string): boolean {
    let count = 0;
    for (let i = 0; i < this.settings.selectedOperators.length; ++i) {
      if (this.settings.selectedOperators[i]) {
        ++count;
      }
    }
    return count > 1 || !this.settings.selectedOperators[this.settings.operators.indexOf(operator)]
  }

}
