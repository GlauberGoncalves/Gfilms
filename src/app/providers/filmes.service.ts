import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { moviedb } from '../api';

@Injectable()
export class FilmesService {
  private key:string              =  moviedb;
  private baseApiKey:string       = "https://api.themoviedb.org/3";
  private languageDefault:string  = "pt-Br";
  public  imgPathApi:string       = "https://image.tmdb.org/t/p/w500";
  public  imgPathDefault:string   = "assets/imgs/filmes/sem_imagem.jpg";
  

  constructor(public http: HttpClient) { }

   /*
     metodos gettes
  */
  
  /* retorna lista dos 20 filmes mais populares */
  getListMovies(page=1){
    return this.http.get(this.baseApiKey + "/movie/popular?api_key=" + this.key +"&page="+ page + "&language=pt-BR" + "&sort_by=release_date.desc");
  }

  /* Retorna informações sobre o filme passado */
  getMovie(id){       
    return this.http.get(this.baseApiKey + "/movie/" + id + "?api_key=" + this.key + "&language=pt-BR" + "&sort_by=release_date.desc");
  }

  /* Retorna os filmes similares ao id(filme) passado por parametro */
  getSimilarMovies(id, page=1){
    return this.http.get(this.baseApiKey + "/movie/" + id + "/similar" + "?api_key=" + this.key +"&page="+ page +  "&language=pt-BR" + "&sort_by=release_date.desc");
  }

  /* Retorna os filmes mais votados */
  getMostVoteds(page=1){    
    return this.http.get(this.baseApiKey + "/movie/top_rated?api_key=" + this.key +"&page="+ page +  "&language=" + this.languageDefault + "&sort_by=release_date.desc");
  }

  getGenereList(page=1){
    return this.http.get(this.baseApiKey + "/genre/movie/list?api_key=" + this.key +"&page="+ page +  "&language="+ this.languageDefault + "&sort_by=release_date.desc");
  }

  /* Retorna Filmes em Cartaz */
  getPlayNow(page=1){    
    return this.http.get(this.baseApiKey + "/movie/now_playing?api_key=" + this.key + "&page="+ page +  "&language=" + this.languageDefault + "&append_to_response=image" + "&sort_by=release_date.desc" );
  }

  /* Busca por compania */
  searchCompany(company_name, page=1){
    return this.http.get(this.baseApiKey + "/search/company?api_key=" + this.key + "&language=" + this.languageDefault + "&query=" + company_name + "&sort_by=release_date.desc");
  }

  getCustomList(id_list, page=1){      
      return this.http.get("https://api.themoviedb.org/4/list/"+ id_list + "?api_key=" + this.key + "&language=" + this.languageDefault +"&page=" + page + "&sort_by=release_date.desc");
  }

  getMovieGenre(genre_id, page=1){    
    return this.http.get(this.baseApiKey + "/discover/movie?api_key=" + this.key + "&with_genres="+ genre_id + "&language=" + this.languageDefault +"&page=" + page + "&sort_by=popularity.desc");
  }

  getTheBestsMoviesForYear(year=2017, page=1){
    return this.http.get(this.baseApiKey + "/discover/movie?primary_release_year="+ year +"&page="+ page + "&language=" + this.languageDefault + "&api_key=" + this.key + "&sort_by=vote_average.desc");
  }

  getAtors(id_filme){
    return this.http.get(this.baseApiKey + "/movie/" + id_filme + "/credits?api_key=" + this.key);    
  }

  /*
    metodos adicionais 
  */

  /* Retorna o resultado da busca */
  searchMovie(query, page=1){
    return this.http.get(this.baseApiKey + "/search/movie?api_key="  +  this.key + "&page="+ page + "&language=" + this.languageDefault + "&query=" + query + "&append_to_response=image" + "&sort_by=release_date.desc" );
  }  

}