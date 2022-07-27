import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CategoriaModel } from 'app/models/categoria-model';
import { ProdutoModel } from 'app/models/produto-model';
import { ProdutoCategoriasModel } from 'app/models/produto-categorias-model'
import { FinanciamentoRegistosTotalModel } from 'app/models/financiamento-registos-total-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  private REST_API_SERVER = "https://localhost:7134";

  constructor(private httpClient: HttpClient) { }

  public ObterListaCategorias(): Observable<CategoriaModel[]>{
    return this.httpClient.get<any[]>(this.REST_API_SERVER + "/ObterListaCategorias");
  }

  public ObterCategoriaPorId(id:number){
    return this.httpClient.get(this.REST_API_SERVER + "/ObterCategoriaPorId/" + id);
  }

  public ApagarCategoriaPorId(id:number){
    return this.httpClient.delete(this.REST_API_SERVER + "/Categoria/" + id);
  }

  public AdicionarCategoria(categoria: CategoriaModel)
  {
    return this.httpClient.post<any[]>(this.REST_API_SERVER + "/Categoria", categoria, {headers: this.headers});
  }

  public ObterListaProdutos(): Observable<ProdutoModel[]>{
    return this.httpClient.get<any[]>(this.REST_API_SERVER + "/ObterListaProdutos");
  }

  public ObterListaProdutosComCategorias(): Observable<ProdutoCategoriasModel[]>{
    return this.httpClient.get<any[]>(this.REST_API_SERVER + "/ObterListaProdutosComCategorias");
  }

  public ObterProdutoPorId(id:number){
    return this.httpClient.get(this.REST_API_SERVER + "/ObterProdutoPorId/" + id);
  }

  public ApagarProdutoPorId(id:number){
    return this.httpClient.delete(this.REST_API_SERVER + "/Produto/" + id);
  }

  public ObterRegistosFinanciamentoTotal() : Observable<FinanciamentoRegistosTotalModel[]>
  {
    return this.httpClient.get<any[]>(this.REST_API_SERVER + "/ObterListaRegistosFinanciamentoTotal");
  }
}
