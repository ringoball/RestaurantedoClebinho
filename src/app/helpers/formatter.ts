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

  return {
    refeicoes,
    bebida,
    sobremesa,
    valorTotal
  }
}


export const formatMenu = (menu) => {
  const principal = [];
  const carne = [];
  const acompanhamento = [];

  Object.keys(menu).forEach((category) => {
    menu[category].forEach((item) => {
      switch (item.category) {
        case 'principal':
          principal.push(item.name);
          break;
        case 'carnes':
          carne.push(item.name);
          break;
        case 'acompanhamentos':
          acompanhamento.push(item.name);
          break;
        default:
          console.log('errrooo')
          break;
      }
    })

  });
  return {
    principal,
    carne,
    acompanhamento
  }
}