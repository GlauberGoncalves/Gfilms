import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FilmesService } from 'src/app/providers/filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
  providers: [FilmesService]
})
export class ListaFilmesComponent implements OnInit, OnChanges {

  @Input() filmes;
  public filmesMatriz = [];

  constructor(private filmesService: FilmesService) { }


  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log(this.filmes)
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
      this.filmesMatriz.push(lista);
    }
  }

}
