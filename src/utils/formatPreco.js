export function formatPreco(currency) {
    if (!currency) return;
    
    const formattedValue = currency.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formattedValue;
  }