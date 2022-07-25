import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSubProdutosComponent } from './gestao-sub-produtos.component';

describe('TableListComponent', () => {
  let component: GestaoSubProdutosComponent;
  let fixture: ComponentFixture<GestaoSubProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoSubProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoSubProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
