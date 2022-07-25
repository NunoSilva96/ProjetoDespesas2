import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './gestao-categorias.component.html',
  styleUrls: ['./gestao-categorias.component.css']
})
export class GestaoCategoriasComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.ObterListaCategorias().subscribe((data: any[])=>{
      console.log(data);
    }) 

  }

}
