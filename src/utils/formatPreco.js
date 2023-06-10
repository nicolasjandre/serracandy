export function formatPreco(currency) {
    const formattedValue = currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formattedValue;
  }