import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service/data.service';
import { CategoriaModel } from 'app/models/categoria-model';
import { Observable, of, Subject } from "rxjs";


@Component({
  selector: 'gestao-sub-produtos',
  templateUrl: './gestao-sub-produtos.component.html',
  styleUrls: ['./gestao-sub-produtos.component.css']
})
export class GestaoSubProdutosComponent implements OnInit {
  public exportCategorias: Observable<CategoriaModel[]>;

  constructor(private dataservice: DataService) { 
    this.exportCategorias = dataservice.getCategorias();

  }

  ngOnInit() {

    this.exportCategorias = this.dataservice.getCategorias();
  }

}
