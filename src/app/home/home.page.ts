import { Component, OnInit, OnChanges } from '@angular/core';
import { FilmesService } from '../providers/filmes.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [FilmesService]
})
export class HomePage implements OnInit, OnChanges {
  filmes = [ ]
  categorias = []

  constructor(
    private filmesService:FilmesService,
    private router:Router,
    private nav:NavController
  ){}
  
  ngOnInit(): void {     


    // recupera lista de categorias
    this.filmesService.getGenereList()
      .subscribe((categorias) => {
        this.categorias = categorias['genres'];        
      })
      
    // recupera lista de filmes
    this.filmesService.getListMovies()
      .subscribe((results) => {
        this.filmes = results['results']        
      })
  }      

  ngOnChanges(){
  }

  goToPesquisa(){
    this.nav.navigateForward("pesquisa")
      .then(res => {
  
      })
  }

  buscaPorCategoria(event){    


    // this.filmesService.getMovieGenre(21)
    //   .subscribe(res => {
    //     this.filmes = res['results'];        
    // });
    
  }
}
