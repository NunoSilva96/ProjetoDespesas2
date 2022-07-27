import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service/data.service';
import { CategoriaModel } from 'app/models/categoria-model';
import { Observable, of, Subject } from "rxjs";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'gestao-sub-produtos',
  templateUrl: './gestao-sub-produtos.component.html',
  styleUrls: ['./gestao-sub-produtos.component.css']
})
export class GestaoSubProdutosComponent implements OnInit {
  public exportCategorias: Observable<CategoriaModel[]>;
  showLoading: boolean;

  constructor(private dataservice: DataService) { 
  }

  ngOnInit() {

    this.loadCategorias();
  }

  loadCategorias()
  {
    this.showLoading = true;
    let result = this.dataservice.ObterListaCategorias();
    this.exportCategorias = result;
    this.showLoading = false;
  }
}
