export default class Menu {
  id: Number;
  isChecked: Boolean;

  constructor(
    public name: String,
    public description: String,
    public imageUrl: String,
    public category: String,
  ) {
    this.id = Math.random();
    this.isChecked = false;
  }
}