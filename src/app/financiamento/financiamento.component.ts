import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FinanciamentoRegistosTotalModel } from 'app/models/financiamento-registos-total-model';
import { DataService } from '../data-service/data.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './financiamento.component.html',
  styleUrls: ['./financiamento.component.css']
})
export class FinanciamentoComponent implements OnInit {
  listaRegistosFinanciamento: FinanciamentoRegistosTotalModel[];
  valorFinanciado: number;
  valorLiquidado: number;
  valorEmDivida: number;

  showLoading: boolean;

  constructor(private dataService: DataService, private datepipe: DatePipe) {
   }

  ngOnInit() {
    this.carregarFinanciamentoRegistos();
  }

  carregarFinanciamentoRegistos()
  {
    this.showLoading = true;
    this.dataService.ObterRegistosFinanciamentoTotal()
    .subscribe((result) => 
    {      
      this.listaRegistosFinanciamento = result;   
      this.valorFinanciado = 15000;
      this.calculosFinais(this.listaRegistosFinanciamento);
      this.showLoading = false;
    }, error => {
      console.log("Erro ao carregar as categorias!");
      this.showLoading = false;
    });
  }

  calculosFinais(registos: FinanciamentoRegistosTotalModel[])
  {
    let somaTotal = 0;

    for(let i=0; i<registos.length; i++){
      somaTotal = somaTotal + registos[i].valor;
    };
    
    this.valorEmDivida = this.valorFinanciado - somaTotal;
    this.valorLiquidado = somaTotal;
  }
}
