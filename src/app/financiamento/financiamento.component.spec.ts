import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciamentoComponent } from './financiamento.component';

describe('TableListComponent', () => {
  let component: FinanciamentoComponent;
  let fixture: ComponentFixture<FinanciamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
