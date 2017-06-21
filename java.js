'use strict';

Product.totalClicks = 0;
Product.all = [];
Product.previousProduct = [];
Product.currentProduct = [];

Product.imageHTML = document.getElementById('productImage');

function Product (name, image) {
  this.name = name;
  this.image = image;
  this.clicks = 0;
  this.views = 0;
  this.currentConverstion = 0;
  Product.all.push(this);
}

//The check Q === java function numbers.indexOf(i)
// function for the check of array uneeded...

// YOU CANNOT DIVIDE BY ZERO    ----> don't forget to cycle products through i place!
function converstionRate (){
  for (var i = 0; i < Product.all.length; i++) {
    if (Product.all[i].views === 0) {
      Product.all[i].currentConversion = 'Zero';
    } else {
      Product.all[i].currentConversion = (Product.all[i].clicks / Product.all[i].views);
    }
  }
}

// Austin's smooth Generate Image function
function generateImage() {
  Product.currentProduct = [];
  while (Product.currentProduct.length < 3) {
    var randomImageSelector = Math.floor(Math.random() * Product.all.length);
    if ((Product.currentProduct.indexOf(randomImageSelector) < 0) && (Product.previousProduct.indexOf(randomImageSelector) < 0)) {
      Product.currentProduct.push(Product.all[randomImageSelector]);
      Product.all[randomImageSelector].views++;
    }
  }
  Product.previousProduct = Product.currentProduct;
}

function render() {
  generateImage();
  for (var i = 0; i < Product.all.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = Product.currentProduct[i].image;
    imgEl.id = Product.currentProduct[i].name;
    Product.imageHTML.appendChild(imgEl);
  }
}

// event handler === Austin's Clean this up!
function clickHandler (event){

}

// ONE extra product
new Product ('bag', 'images/bag.jpg');
new Product ('banana', 'images/banana.jpg');
new Product ('bathroom', 'images/bathroom.jpg');
new Product ('boots', 'images/boots.jpg');
new Product ('breakfast', 'images/breakfast.jpg');
new Product ('bubblegum', 'images/bubblegum.jpg');
new Product ('chair', 'images/chair.jpg');
new Product ('cthulhu', 'images/cthulhu.jpg');
new Product ('dog-duck', 'images/dog-duck.jpg');
new Product ('dragon', 'images/dragon.jpg');
new Product ('pen', 'images/pen.jpg');
new Product ('pet-sweep', 'images/petsweep.jpg');
new Product ('shark', 'images/shark.jpg');
new Product ('sweep', 'images/sweep.jpg');
new Product ('scissors', 'images/scissors.jpg');
new Product ('tauntaun', 'images/tauntaun.jpg');
new Product ('unicorn', 'images/unicorn.jpg');
new Product ('usb', 'images/usb.jpg');
new Product ('water-can', 'images/water-can.jpg');
new Product ('wine-glass', 'images/wine-glass.jpg');

render();
//event LISTENER
Product.productImage.addEventListener('click', clickHandler);
