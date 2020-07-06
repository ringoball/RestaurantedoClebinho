export const formatPedido = (cart, valorTotal) => {
  const refeicoes = [];
  const bebida = [];
  const sobremesa = [];

  cart.forEach((item) => {
    for (let i = 0; i < item.quantity; i++) {
      switch (item.category) {
        case 'Bebida':
          bebida.push(item.name);
          break;
        case 'Sobremesa':
          sobremesa.push(item.name);
          break;
        case 'Refeicao':
          refeicoes.push(item);
          break;
        default:
          console.log('errrooo')
          break;

      }
    }
  });

  console.log({
    refeicoes,
    bebida,
    sobremesa,
    valorTotal
  })
  return {
    refeicoes,
    bebida,
    sobremesa,
    valorTotal
  }
}