function getOrder(input) {
  const inputArr = "Burger Fries Chicken Pizza Onionrings Sandwich Milkshake Coke".split(" ");
  const valid = [];
  inputArr.forEach((item) => { valid.push(item[0].toLowerCase() + item.slice(1)) });
  let retStr = "";
  let strInput = input.slice(0);
  while (strInput.length) {
    valid.forEach((item) => {
      let idx = strInput.index(item);
    })
  }

  return retStr; 
}

getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza');