'use strict';
/// global variables
var order = [];
var list = document.getElementById('coffeeList');
var blackCoffee = document.getElementById('black')
var frenchCoffee = document.getElementById('french')
var chocolateCoffee = document.getElementById('chocolate')
var whiteChocolateCoffee = document.getElementById('whiteChocolate')
var caramelCoffee = document.getElementById('caramel')
var numberOfItems = 0;
var items = document.getElementById('items')
var buyItem = [];
var full = document.getElementById('full')
var menu = document.getElementById('menu');

//constructor function for items
function Item(name, id) {
  this.name = name;
  this.id = id;
  this.amount = 0;
  order.push(this);
}

var black = new Item('BLACK COFFEE', blackCoffee.id);
var french = new Item('FRENCH VANILLA COFFEE', frenchCoffee.id);
var chocolate = new Item('CHOCOLATE COFFEE', chocolateCoffee.id);
var white = new Item('WHITE CHOCOLATE COFFEE', whiteChocolateCoffee.id);
var caramel = new Item('CARAMEL COFFEE', caramelCoffee.id);

items.textContent = 'ORDER  ' + numberOfItems;

function clicked(event) {
  event.preventDefault();
  var id = event.target.id;
  for (var i = 0; i < order.length; i++) {
    if (id === order[i].id) {
      numberOfItems++;
      items.textContent = 'ORDER  ' + numberOfItems;
      order[i].amount++;
      if (!buyItem.includes(order[i])) {
        buyItem.push(order[i]);
      }
    }
  }

}


function showOrder() {
  removeMenu();
  for (var i = 0; i < buyItem.length; i++) {
    if (buyItem[i].amount > 0) {
      // creates element for the DOM
      var div = document.createElement('div');
      var li = document.createElement('li');
      // Set attributes of created elements
      li.setAttribute('id', buyItem[i].name);
      div.setAttribute('class', 'item')
      li.textContent = buyItem[i].name + ' ' + buyItem[i].amount;
      // appends elements to the DOM
      div.appendChild(li);
      full.appendChild(div)
    }
  }
}

function removeOrder() {
  // remove child from the DOM
  full.removeChild(full.childNodes[full.childElementCount]);
  list.style.display = 'block'
}

function removeMenu() {
  full.style.display = 'block';
}

function removeItem(event) {
  event.preventDefault()
  var id = event.target.id;
  for (var i = 0; i < buyItem.length; i++) {
    if (id === buyItem[i].name) {
      numberOfItems = numberOfItems - buyItem[i].amount;
      buyItem[i].amount -= buyItem[i].amount;
      // update texts on the DOM
      items.textContent = 'ORDER  ' + numberOfItems;
      var ll = document.getElementById(buyItem[i].name);
      //removes element from the DOM
      ll.parentNode.removeChild(ll)
      return numberOfItems;
    }
  }
}

full.addEventListener('click', removeItem)
menu.addEventListener('click', removeOrder)
list.addEventListener('click', clicked)
items.addEventListener('click', showOrder)