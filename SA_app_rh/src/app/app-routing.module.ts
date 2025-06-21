import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { VagasComponent } from './views/vagas/vagas.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // rota inicial
  { path: 'curriculo', component: CurriculosComponent },
  { path: 'vagas', component: VagasComponent },
  { path: '**', redirectTo: '' } // se digitar rota errada, volta pro início
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
