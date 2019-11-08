function getOrder(input) {
  const inputArr = "Burger Fries Chicken Pizza Onionrings Sandwich Milkshake Coke".split(" ");
  const valid = [];
  inputArr.forEach((item) => { valid.push(item[0].toLowerCase() + item.slice(1)) });
  let retStr = "";
  let strInput = input.slice(0);
  while (strInput.length) {
    for(let i=0; i < valid.length; i++) {
      let idx = strInput.indexOf(valid[i]);
      while (idx > -1) {
        let newStr = strInput.slice(0, idx) + strInput.slice(idx + valid[i].length, strInput.length);
        strInput = newStr;
        retStr += valid[i][0].toUpperCase() + valid[i].slice(1) + " ";
        idx = strInput.indexOf(valid[i]);
      }
    }
  }

  return retStr.slice(0,retStr.length - 1); 
}

const x = getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza');
console.log(x);