import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CommonModule } from '@angular/common';
import { GestaoProdutosComponent } from './gestao-produtos/gestao-produtos.component';
import { GestaoCategoriasComponent } from './gestao-categorias/gestao-categorias.component';
import { FinanciamentoComponent } from './financiamento/financiamento.component';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GestaoProdutosComponent,
    GestaoCategoriasComponent,
    FinanciamentoComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
