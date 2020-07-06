export default class Item {
  id: Number;
  quantity: Number;

  constructor(
    public name: String,
    public description: String,
    public price: String,
    public imageUrl: String
  ) {
    this.id = Math.random();
    this.quantity = 1;
  }
}