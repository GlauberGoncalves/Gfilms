import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilmePage } from './filme.page';
import { ListaFilmesComponent } from '../shared/components/lista-filmes/lista-filmes.component';
import { GbComponentsModule } from '../shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FilmePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GbComponentsModule
  ],
  declarations: [FilmePage]
})
export class FilmePageModule {}
