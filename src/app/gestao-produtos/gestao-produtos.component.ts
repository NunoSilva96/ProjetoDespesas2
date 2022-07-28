import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { CategoriaModel } from 'app/models/categoria-model';
import { ProdutoCategoriasModel } from 'app/models/produto-categorias-model'
import { ProdutoModel } from 'app/models/produto-model';
import { Observable, of, Subject } from "rxjs";
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
  @Input() public produtoParaAdicionar: ProdutoModel = {id: 0, titulo:'', fk_categoriaID: 0};
  categoriaSelecionada = 0;

  @ViewChild('inputTitulo')
  inputTitulo: ElementRef;

  @ViewChild('dropdownCategoria')
  dropdownCategoria: ElementRef;

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

  adicionarProduto()
  { 
    this.showLoading = true;
    let tituloParaAdicionar = ((document.getElementById("inputTitulo") as HTMLInputElement).value);    
    let categoriaParaAdicionar = Number(this.categoriaSelecionada);
    console.log(categoriaParaAdicionar);

    this.produtoParaAdicionar.fk_categoriaID = categoriaParaAdicionar;
    this.produtoParaAdicionar.titulo = tituloParaAdicionar;

    this.dataService.AdicionarProduto(this.produtoParaAdicionar)
    .subscribe((result) => {
      this.showLoading = false;
      this.limparCamposFecharModal();
      //Alterar este alert para algo como deve ser. Por ex: notificação
      alert("Produto Adicionado com sucesso!")
      this.carregarListaProdutos();
    }, error => {
      console.log("Erro ao inserir o produto")
      this.showLoading = false;
    });
  }

  limparCamposFecharModal()
  {
    document.getElementById("closeModalButton").click();   
  }

  onSelected(value:number): void {
		this.categoriaSelecionada = value;
	}
  
}