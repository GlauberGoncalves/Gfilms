import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../providers/filmes.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [FilmesService]
})
export class HomePage implements OnInit {
  filmes = [ ]
  categorias = []

  constructor(
    private filmesService:FilmesService,
    private navCtrl:NavController
  ){}
  
  ngOnInit(): void {     


    // recupera lista de categorias
    this.filmesService.getGenereList()
      .subscribe((categorias) => {
        this.categorias = categorias['genres'];
        console.log(this.categorias)
        console.log(categorias);
      })
      
    // recupera lista de filmes
    this.filmesService.getListMovies()
      .subscribe((results) => {
        this.filmes = results['results']
        console.log(this.filmes)
      })
  }      
}
