import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FilmesService } from '../providers/filmes.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
  providers: [FilmesService]
})
export class FilmePage implements OnInit {

  idfilme = 299537;
  filme$: Observable<Object>;
  selectedId: number;
  filmesSimilares: Object;
  atores:Object[];
  filme;  
  listaAtoresComFoto = [];

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {


    this.filme$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        
        this.filmesService.getSimilarMovies(this.selectedId)
          .subscribe(filmesSimilares => {
            this.filmesSimilares = filmesSimilares["results"];
            // console.log(filmesSimilares["results"]);
          })
          
        this.filmesService.getAtors(this.selectedId)
          .subscribe(results => {
            console.log(results);
            this.atores = results["cast"];

            
            for(let ator=0; ator < this.atores.length; ator++){
              if(this.atores[ator]["imagem_profile"] != "null"){
                this.listaAtoresComFoto.push(this.atores[ator]);
              }
            }            
            this.listaAtoresComFoto;
            console.log(this.atores);
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
    })
  }
}
