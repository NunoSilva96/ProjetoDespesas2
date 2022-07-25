import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { CategoriaModel } from 'app/models/categoria-model';
import { Observable, of, Subject } from "rxjs";
import { takeUntil, map } from "rxjs/operators";

@Component({
  selector: 'gestao-produtos',
  templateUrl: './gestao-produtos.component.html',
  styleUrls: ['./gestao-produtos.component.css']
})
export class GestaoProdutosComponent implements OnInit {

  public exportCategorias: Observable<CategoriaModel[]>;

  constructor(private dataService: DataService) { 
    this.exportCategorias = dataService.getCategorias();
  }

  ngOnInit() {

  }
  // loadCategorias()
  // {
  //   this.exportCategorias = this.dataService.getCategorias();
  // }
}
