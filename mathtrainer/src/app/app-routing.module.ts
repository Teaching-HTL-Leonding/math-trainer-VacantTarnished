import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcerciseComponent } from './excercise/excercise.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: '/settings', pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent},
  {path: 'excercise', component: ExcerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
