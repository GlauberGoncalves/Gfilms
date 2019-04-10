import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FilmesService } from '../providers/filmes.service';
import { NavController } from '@ionic/angular';
import { FavoritosService } from '../favoritos/favoritos.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
  providers: [FilmesService, FavoritosService]
})
export class FilmePage implements OnInit {

  idfilme = 299537;
  filme$: Observable<Object>;
  selectedId: number;
  filmesSimilares: Object;
  atores:Object[];
  filme;  
  listaAtoresComFoto = [];
  result;
  btn:boolean = false;

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute,
    private favoritoService: FavoritosService
  ) { }

  ngOnInit() {


    this.filme$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        
        this.filmesService.getSimilarMovies(this.selectedId)
          .subscribe(filmesSimilares => {
            this.filmesSimilares = filmesSimilares["results"];
          })
          
        this.filmesService.getAtors(this.selectedId)
          .subscribe(results => {
            this.atores = results["cast"];

            
            for(let ator=0; ator < this.atores.length; ator++){
              if(this.atores[ator]["imagem_profile"] != "null"){
                this.listaAtoresComFoto.push(this.atores[ator]);
              }
            }            
            this.listaAtoresComFoto;
          })
        return this.filmesService.getMovie(this.selectedId);

      })
    );    


    this.filme$.subscribe(results => {      
      
      this.filme = {
              imagem: this.filmesService.imgPathApi + results["backdrop_path"],
              titulo: results["title"],
              subtitulo: results["tagline"],
              resumo: results["overview"],
              nota: results["vote_average"],
              dataEstreia: results["release_date"]
            }

      this.result = results;
    })

    this.favoritoService.buscaUm(this.selectedId)
    .then( (res) => {
      res ? this.btn = true : this.btn = false;
    })

  }

  favoritarFilme(){

    if(this.btn){
      
      this.favoritoService.remove(this.selectedId)
      this.btn = false;

    } else {

      this.favoritoService.salvar(this.result)
        .then(() => {
          this.btn = true;
        })
    }
  }
}
