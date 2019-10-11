var price = 5.99,
  quantity = 30;
export const productView = {
  price,
  quantity,
  calculateValue() {
    return price * quantity;
  },
  addValue() {
    return price + quantity;
  },
  subtractValue() {
    return quantity - price;
  },
};
console.log(productView.calculateValue());
console.log(productView.addValue());
console.log(productView.subtractValue());
