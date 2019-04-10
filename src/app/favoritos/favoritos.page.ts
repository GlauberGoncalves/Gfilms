import { Component, OnInit } from '@angular/core';
import { FavoritosService } from './favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  providers: [FavoritosService]
})
export class FavoritosPage implements OnInit {

  filmes = [];

  constructor(
    private service: FavoritosService
  ) {
    console.log(localStorage.getItem('db'));
  }

  ngOnInit() {
    this.service.teste();

    this.service.buscarTodos()
      .then( (res:Array<Object>) => {
        this.filmes = res;
        console.log(res);
      });
  }
}
