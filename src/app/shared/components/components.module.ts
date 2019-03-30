import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
;


@NgModule({
  declarations: [
    ListaFilmesComponent
  ],
  imports: [
    CommonModule,    
    IonicModule.forRoot()
  ],
  exports: [ListaFilmesComponent]
})
export class GbComponentsModule { }
