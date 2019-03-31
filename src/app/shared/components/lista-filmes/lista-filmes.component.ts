import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilmesService } from 'src/app/providers/filmes.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
  providers: [FilmesService]
})
export class ListaFilmesComponent implements OnInit, OnChanges {

  @Input() filmes;
  public filmesMatriz = [];
  public filmesAux = [];

  constructor(
    private filmesService: FilmesService,
    private router:Router,
    private navCtrl:NavController) { }


  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    

    this.filmesMatriz = []
    
    let divisao = this.filmes.length / 3;

    let filme = 0;
    for (let i = 0; i <= divisao; i++) {
      let lista = []
      for (let j = 0; j < 3; j++) {
        if (filme < this.filmes.length) {
          lista.push(this.filmes[filme]);
          filme++;
        }
      }
      this.filmesAux.push(lista);
    }
    this.filmesMatriz = this.filmesAux;
  }

  public goFilmePage(e: Event){
        
    let idFilme = e.srcElement.id;    
    this.router.navigate(["filme", idFilme])
  }

}
