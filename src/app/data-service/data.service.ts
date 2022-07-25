import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CategoriaModel } from 'app/models/categoria-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://localhost:7134";

  constructor(private httpClient: HttpClient) { }

  public ObterListaCategorias(): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER + "/ObterListaCategorias");
  }

  public ObterCategoriaPorId(id:number){
    return this.httpClient.get(this.REST_API_SERVER + "/ObterCategoriaPorId/" + id);
  }

  public ApagarCategoriaPorId(id:number){
    return this.httpClient.delete(this.REST_API_SERVER + "/Categoria/" + id);
  }

  public ObterListaProdutos(){
    return this.httpClient.get(this.REST_API_SERVER + "/ObterListaProdutos");
  }

  public ObterProdutoPorId(id:number){
    return this.httpClient.get(this.REST_API_SERVER + "/ObterProdutoPorId/" + id);
  }

  public ApagarProdutoPorId(id:number){
    return this.httpClient.delete(this.REST_API_SERVER + "/Produto/" + id);
  }

  getCategory3(): Observable<CategoriaModel> {
    const URL = `${this.REST_API_SERVER}/ObterCategoriaPorId/3`;
    return this.httpClient.get<CategoriaModel>(URL);
   }

   getCategorias(): Observable<CategoriaModel[]> {
    return this.httpClient.get<any[]>(this.REST_API_SERVER + '/ObterListaCategorias');
  }
}
