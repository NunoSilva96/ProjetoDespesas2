import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { CategoriaModel } from 'app/models/categoria-model';
import { Observable, of, Subject } from "rxjs";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-table-list',
  templateUrl: './gestao-categorias.component.html',
  styleUrls: ['./gestao-categorias.component.css']
})
export class GestaoCategoriasComponent implements OnInit {
  listaCategorias: CategoriaModel[];
  showLoading: boolean;
  @Input() public novaCategoria: CategoriaModel = {id: 0, titulo:''};

  @ViewChild('inputTituloCategoria')
  inputTitutloCategoria: ElementRef;

  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
    this.carregarListaCategorias();
  }

  carregarListaCategorias()
  {
    this.showLoading = true;
    this.dataService.ObterListaCategorias()
    .subscribe((result) => 
    {      
      this.listaCategorias = result;     
      this.showLoading = false;
    }, error => {
      console.log("Erro ao carregar as categorias!");
      this.showLoading = false;
    });
  }

  adicionarCategoira()
  {
    var tituloCategoria = ((document.getElementById("inputTitulo") as HTMLInputElement).value);
    this.novaCategoria.titulo = tituloCategoria;
    
    this.showLoading = true;
    this.dataService.AdicionarCategoria(this.novaCategoria)
    .subscribe((result) => 
    {        
      this.showLoading = false;
      this.limparCamposFecharModal();
      //Alterar este alert para algo como deve ser. Por ex: notificação
      alert("Categoria Adicionada com sucesso!")
      this.carregarListaCategorias();
    }, error => {
      if(error.status === 401)
      {
        console.log("Erro ao adicionar a categoria! Não autorizado");
      }
      else
      {
        console.log("Erro ao adicionar a categoria!");
        console.log(error);
      }
      this.showLoading = false;
      
    });
  }

  limparCamposFecharModal()
  {
    document.getElementById("closeModalButton").click();
    this.inputTitutloCategoria.nativeElement.value = null;
  }

}
