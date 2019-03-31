import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../providers/filmes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
  providers: [FilmesService]
})
export class PesquisaPage implements OnInit {

  public filmes = [];

  constructor(private filmesService:FilmesService, private router:Router) { }

  ngOnInit() {
  }

  public pesquisar(event:Event){

    this.filmes = [];
    let termoDaBusca = event["detail"].value;

    if(termoDaBusca.length > 0){
      this.filmesService.searchMovie(termoDaBusca)
        .subscribe( resposta => {
          this.filmes = resposta["results"];
        });
    } else {
      this.filmes = [];
    }    
  }


  public reset(){
    this.router.navigate(["pesquisa"])
  }
  

}
