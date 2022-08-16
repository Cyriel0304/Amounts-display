const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
  };
  
  const newPurchase = purchases.findIndex((item) => item.price === purchase.price)
  if(purchases.length < 1 || newPurchase === -1) {
    purchases.push(purchase)
  } else {
    purchases[newPurchase].number += purchase.number
  }

  window.alert(`${display()}\n'subtotal ${subtotal()}yen`);
  priceElement.value = "";
  numberElement.value = "";
}
function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number;
  }, 0)
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.price}yen:${purchase.number}点\n`;
  }).join("")
};

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0
  } else if (sum < 2000){
    return 500
  } else {
    return 250
  }
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`Subtotal is {sum}yen、the shipping fee is ${postage}yen.The total is ${sum + postage} yen`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}