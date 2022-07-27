export interface FinanciamentoRegistosTotalModel{
    id: number,
    titulo: string,
    valor: number,
    data_Pagamento: Date,
    fk_financiamentoID: number,
    valor_financiado: number
}