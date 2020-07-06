import Item from '../classes/Item';

export const addToCart = (data): boolean => {
  try {
    const currentContent: string = localStorage.getItem('cart');

    if (currentContent) {
      const contentArray: Array<Item> = JSON.parse(currentContent);
      contentArray.push(data);
      const storageContent = JSON.stringify(contentArray);

      localStorage.setItem('cart', storageContent);
    } else {
      const firstItem: string = JSON.stringify([data]);

      localStorage.setItem('cart', firstItem);
    }
    return true;
  } catch (err) {
    return false;
  }
}


export const getCart = (): Array<Item> => {
  try {

    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'));
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};


export const deleteItem = (id: number): boolean => {
  try {
    const items = JSON.parse(localStorage.getItem('cart'))
    const newArray = items.filter((item) => {
      return item.id !== id
    });
    localStorage.setItem('cart', JSON.stringify(newArray));
    return true;
  } catch (err) {
    return false;
  }
};

export const setCart = (newCart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(newCart))
    return true;
  } catch (err) {
    return false;
  }
}