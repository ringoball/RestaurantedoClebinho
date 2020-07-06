import Item from '../classes/Items/Item';

export const cart = {

  add: (data): boolean => {
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
  },


  get: (): Array<Item> => {
    try {
      if (JSON.parse(localStorage.getItem('cart'))) {
        return JSON.parse(localStorage.getItem('cart'));
      } else {
        return [];
      }
    } catch (err) {
      return [];
    }
  },


  deleteItem: (id: number): boolean => {
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
  },

  setCart: (newCart) => {
    try {
      localStorage.setItem('cart', JSON.stringify(newCart))
      return true;
    } catch (err) {
      return false;
    }
  },
  clearCart: () => {
    try {
      localStorage.removeItem('cart');
      return true;
    } catch (err) {
      return false;
    }
  }
}

export const menu = {

  add: (data): boolean => {
    try {
      const currentContent: string = localStorage.getItem('menu');

      if (currentContent) {
        const contentArray: Array<Item> = JSON.parse(currentContent);
        contentArray.push(data);
        const storageContent = JSON.stringify(contentArray);

        localStorage.setItem('menu', storageContent);
      } else {
        const firstItem: string = JSON.stringify([data]);

        localStorage.setItem('menu', firstItem);
      }
      return true;
    } catch (err) {
      return false;
    }
  },


  get: (): Array<Item> => {
    try {
      if (JSON.parse(localStorage.getItem('menu'))) {
        return JSON.parse(localStorage.getItem('menu'));
      } else {
        return [];
      }
    } catch (err) {
      return [];
    }
  },


  setMenu: (newMenu) => {
    try {
      localStorage.setItem('menu', JSON.stringify(newMenu))
      return true;
    } catch (err) {
      return false;
    }
  },

  clearMenu: () => {
    try {
      localStorage.removeItem('menu');
      return true;
    } catch (err) {
      return false;
    }
  }
}