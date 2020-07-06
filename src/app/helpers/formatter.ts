import Item from '../classes/Items/Item';

export const formatPedido = (cart, valorTotal) => {
  const refeicoes = [];
  const bebida = [];
  const sobremesa = [];

  console.log(cart)

  cart.forEach((item) => {
    for (let i = 0; i < item.quantity; i++) {
      switch (item.category) {
        case 'Bebida':
          bebida.push(item.name);
          break;
        case 'Sobremesa':
          sobremesa.push(item.name);
          break;
        case 'refeicoes':
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
  const carnes = [];
  const acompanhamentos = [];

  Object.keys(menu).forEach((category) => {
    menu[category].forEach((item) => {
      switch (item.category) {
        case 'principal':
          principal.push(item.name);
          break;
        case 'carnes':
          carnes.push(item.name);
          break;
        case 'acompanhamentos':
          acompanhamentos.push(item.name);
          break;
        default:
          console.log('errrooo')
          break;
      }
    })

  });
  return {
    principal,
    carnes,
    acompanhamentos
  }
}


export const formatMeal = (meal) => {
  let description = '';
  Object.keys(meal).forEach((category, index1) => {
    meal[category].forEach((item, index2) => {
      if (index1 + index2 === 0) {
        description += `${item.name}`;
      } else {
        description += `, ${item.name}`;
      }
    });
  });
  return new Item('Refeição', description, '20.00', 'refeicao', 'refeicoes');
}