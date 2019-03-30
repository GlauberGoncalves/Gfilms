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
  filme;

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {


    this.filme$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        console.log(this.selectedId)
        return this.filmesService.getMovie(this.selectedId);

      })
    );    


    this.filme$.subscribe(results => {
      console.log(results);
      

      this.filme = {
              imagem: this.filmesService.imgPathApi + results["backdrop_path"],
              titulo: results["title"],
              subtitulo: results["tagline"],
              resumo: results["overview"],
              nota: results["vote_average"],
              dataEstreia: results["release_date"]
            }      
    })

    // this.filmesService.getMovie(this.idfilme)
    //   .subscribe( results => {
    //     // console.log(results);

    //     this.filme = {
    //       imagem: this.filmesService.imgPathApi + results["backdrop_path"],
    //       titulo: results["title"],
    //       subtitulo: results["tagline"],
    //       resumo: results["overview"],
    //       nota: results["vote_average"],
    //       dataEstreia: results["release_date"]
    //     }
    //   })
  }
}
