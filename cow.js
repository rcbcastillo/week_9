const cowsay = require('cowsay');

function cowSay() {
  console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "Oo",
    T: "U "
  }));
}


module.exports = { cowSay };


