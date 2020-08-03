import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './results/result.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pitches',
    pathMatch: 'full'
  },

  {
    path: 'pitches',
    component: ResultComponent
  },

  {
    path: 'pitches/:id',
    component: ResultComponent
  },

  {
    path: '**',
    redirectTo: 'todos',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SearchRoutingModule { }
