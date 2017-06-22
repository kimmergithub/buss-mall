'use strict';
//download beautify package

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

// event handler === Austin's === need to write and re-write and clean this up!
function clickHandler(event) {
  for (var i = 0; i < Product.currentProduct.length; i++) {

    if (event.target.id === Product.currentProduct[i].name) {
      Product.currentProduct[i].clicks++;
      Product.totalClicks++;
      var remEl = document.getElementById('productImage');
      while (remEl.firstChild) {
        remEl.removeChild(remEl.firstChild);
      }
      if (Product.totalClicks === 25) {
        var remEL = document.getElementById('productImage');
        moveToStorage();
        while (remEL.firstChild) {
          remEL.removeChild(remEL.firstChild);
        }
        converstionRate();
        Product.imageHTML.removeEventListener('click', clickHandler);
        var secEl = document.createElement('section');
        secEl.id = 'results';
        var h2El = document.createElement('h2');
        h2El.textContent = 'Results';
        secEl.appendChild(h2El);
        var ulEl = document.createElement('ul');
        for (var i = 0; i < Product.all.length; i++) {
          var liEl = document.createElement('li');
          liEl.textContent = Product.all[i].clicks + ' votes for ' + Product.all[i].name + '.';
          ulEl.appendChild(liEl);
        }
        secEl.appendChild(ulEl);
        Product.imageHTML.appendChild(secEl);
      } else {
        moveToStorage();
        render();
        converstionRate();
        createChart();
      }
    }
  }
}

function render() {
  generateImage();
  for (var i = 0; i < Product.currentProduct.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = Product.currentProduct[i].image;
    imgEl.id = Product.currentProduct[i].name;
    Product.imageHTML.appendChild(imgEl);
  }
}

function emptyStorage () {
  if (localStorage.length === 0) {
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
    new Product ('sweep', 'images/sweep.png');
    new Product ('scissors', 'images/scissors.jpg');
    new Product ('tauntaun', 'images/tauntaun.jpg');
    new Product ('unicorn', 'images/unicorn.jpg');
    new Product ('usb', 'images/usb.gif');
    new Product ('water-can', 'images/water-can.jpg');
    new Product ('wine-glass', 'images/wine-glass.jpg');
  } else {
    //pullstorage function
    retrieveFromStorage();
  }
}

function moveToStorage () {
  var allStore = JSON.stringify(Product.all);
  localStorage.setItem('data', allStore);
}

function retrieveFromStorage () {
  var allStore = localStorage.getItem('data');
  Product.all = JSON.parse(allStore);
}

//event LISTENER
Product.imageHTML.addEventListener('click', clickHandler);

function createChart (){
  var getChart = document.getElementById('canvaChart');
  var ctx = document.getElementById('chart');
  ctx.appendChild(getChart);
  var chartL = [];
  var chartD = [];

  for (var i = 0; i < Product.all.length; i++) {
    chartL.push(Product.all[i].name);
    chartD.push(Product.all[i].clicks);
  }
  // CANVAS CODE
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartL,
      datasets: [{
        label: '# of clicks',
        data: chartD,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
emptyStorage();
render();
