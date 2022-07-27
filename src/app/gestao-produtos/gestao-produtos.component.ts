import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { CategoriaModel } from 'app/models/categoria-model';
import { ProdutoCategoriasModel } from 'app/models/produto-categorias-model'
import { Observable, of, Subject } from "rxjs";
import { takeUntil, map } from "rxjs/operators";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-list',
  templateUrl: './gestao-produtos.component.html',
  styleUrls: ['./gestao-produtos.component.css']
})
export class GestaoProdutosComponent implements OnInit {
    
  listaCategorias: CategoriaModel[];
  listaProdutos: ProdutoCategoriasModel[];
  showLoading: boolean;
  constructor(private dataService: DataService) { 

    
  }

  ngOnInit() {

    this.carregarCategorias();
    this.carregarListaProdutos();

  }

  carregarCategorias()
  {
    this.showLoading = true;
    this.dataService.ObterListaCategorias()
    .subscribe((result) => 
    {      
      this.listaCategorias = result;   
      this.showLoading = false;   
    }, error => {
      this.showLoading = false;
      console.log("Erro ao carregar as categorias!");
    });
  }
  
  carregarListaProdutos()
  {
    this.dataService.ObterListaProdutosComCategorias()
    .subscribe((result) => 
    {      
      this.listaProdutos = result;      
    }, error => {
      console.log("Erro ao carregar as categorias!");
    });
  }
}