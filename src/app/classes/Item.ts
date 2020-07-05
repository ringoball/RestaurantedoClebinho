export default class Item {
  constructor(
    private _name: String,
    private _description: String,
    private _price: String,
    private _imageUrl: String
  ) {

  }
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }
  get price() {
    return this._price;
  }
  get imageUrl() {
    return this._imageUrl;
  }
}