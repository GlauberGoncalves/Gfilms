import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/providers/filmes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ator-info',
  templateUrl: './ator-info.page.html',
  styleUrls: ['./ator-info.page.scss'],
  providers: [ FilmesService ]
})
export class AtorInfoPage implements OnInit {

  private idAtor = 287;

  private ator;
  filmes = [];
  selectedId;
  filme$: Observable<Object>;
  imagens;

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.filme$ = this.route.paramMap.pipe(      
      switchMap(params => {        
        this.selectedId = +params.get('id');                          

        this.filmesService.getAtor(this.selectedId)
          .subscribe(res => {
            this.ator = res;
          });

        this.filmesService.getAtorImages(this.selectedId)
          .subscribe(res => {
            this.imagens = res["profiles"][0];
          })
    
        this.filmesService.getMovieCredits(this.selectedId)
          .subscribe( res => {
            this.filmes = res["cast"];
          })
        return "agora foi";
      })      
    );  


    this.filme$.subscribe(res => {
    })

  }
}
