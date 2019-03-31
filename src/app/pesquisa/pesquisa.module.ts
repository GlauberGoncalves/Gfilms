import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PesquisaPage } from './pesquisa.page';
import { GbComponentsModule } from '../shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PesquisaPage
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
  declarations: [PesquisaPage]
})
export class PesquisaPageModule {}
