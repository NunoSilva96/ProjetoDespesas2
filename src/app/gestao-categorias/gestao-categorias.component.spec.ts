import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoCategoriasComponent } from './gestao-categorias.component';

describe('TableListComponent', () => {
  let component: GestaoCategoriasComponent;
  let fixture: ComponentFixture<GestaoCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
