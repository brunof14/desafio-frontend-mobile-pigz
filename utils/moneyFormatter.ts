/**
 * Aqui você chamaria uma função ou uma lib para tratar transformações
 * de números em valores monetários
 */

const real = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format;

export const moneyFormatter = { real };
