import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtorInfoPage } from './ator-info.page';
import { GbComponentsModule } from 'src/app/shared/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AtorInfoPage
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
  declarations: [AtorInfoPage]
})
export class AtorInfoPageModule {}
