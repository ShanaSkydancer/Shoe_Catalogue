
// var dataList = [];

// if (localStorage.getItem('localData') === null){
  var myTemplate = document.getElementById('myTemplate').innerHTML;
  var myTemplateInstance = Handlebars.compile(myTemplate);
  var shoeStock = [
      {
        brand: "Alexander McQueen",
        size: 3,
        color: "Gold",
        price: 4200.00,
        stock: 3
      },
      {
        brand: "Chanel",
        size: 4,
        color: "Pink",
        price: 2800.00,
        stock: 10
      },
      {
        brand: "Christian Louboutin",
        size: 6,
        color: "Red",
        price: 4200.00,
        stock: 4
      },
      {
        brand: "Gucci",
        size: 6,
        color: "Purple",
        price: 1899.99,
        stock: 8
      },
      {
        brand: "Jimmy Choo",
        size: 5,
        color: "Blue",
        price: 2900.00,
        stock: 5
      },
      {
        brand: "Louis Vuitton",
        size: 6,
        color: "Pink",
        price: 2999.99,
        stock: 2
      }
  ];

    // localStorage.setItem('localData', JSON.stringify(data));
    var data = {option : shoeStock};
    document.getElementById("data").innerHTML = myTemplateInstance(data);
// }

var button = document.querySelector('#button');
button.addEventListener('click', function() {
  event.preventDefault();
  const brandSelect = document.querySelector('#brandSelect');
  const selectedBrandIndex = brandSelect.selectedIndex;
  var selectedBrand = brandSelect.options[selectedBrandIndex].value;

  const sizeSelect = document.querySelector('#sizeSelect');
  const selectedSizeIndex = sizeSelect.selectedIndex;
  var selectedSize = sizeSelect.options[selectedSizeIndex].value;

  const colorSelect = document.querySelector('#colorSelect');
  const selectedColorIndex = colorSelect.selectedIndex;
  var selectedColor = colorSelect.options[selectedColorIndex].value;

    for (var i = 0; i < shoeStock.length; i++) {
      selectedItem = shoeStock[i]
      var brandData = selectedItem.brand;
      console.log(brandData);
      var sizeData = selectedItem.size;
      console.log(sizeData);
      var colorData = selectedItem.color;
      console.log(colorData);
      // var priceData = selectedItem.price;
      // console.log(priceData);
      // var stockData = selectedItem.stock;
      // console.log(stockData);
        if (brandData === selectedBrandIndex && sizeData === selectedSizeIndex && colorData === selectedColorIndex) {
          "Price: R" + currentItem.price.toString() + "Current Stock: " + currentItem.stock.toString();
        } else {
            var outOfStock = dataOutput.getElementsByTagName('p')[0];
            outOfStock.innerHTML = "Out of Stock";
      }
    }
});

// var addbutton = document.querySelector('#addbutton');
// addbutton.addEventListener('submit', function(){
//   event.preventDefault();
// })

// var data = myTemplateInstance ({
//   brands: [
//     {brand: "Chanel"},
//     {brand: "Gucci"},
//     {brand: "Jimmy Choo"},
//     {brand: "Alexander McQueen"},
//     {brand: "Louis Vuitton"},
//     {brand: "Christian Louboutin"},
//   ],
//   sizes: [
//     {size: 2},
//     {size: 3},
//     {size: 4},
//     {size: 5},
//     {size: 6},
//     {size: 7},
//   ],
//   colors: [
//     {color: "Black"},
//     {color: "Pink"},
//     {color: "Blue"},
//     {color: "Purple"},
//     {color: "Gold"},
//     {color: "Red"},
//   ],
//   prices: [
//     {price: 1899.99},
//     {price: 2800.00},
//     {price: 2900.00},
//     {price: 2999.99},
//     {price: 4200.00},
//     {price: 4500.00},
//   ],
//   stocks: [
//     {stock: 2},
//     {stock: 3},
//     {stock: 4},
//     {stock: 5},
//     {stock: 8},
//     {stock: 10},
//   ]
// });

// var data = myTemplateInstance ({
//   brands: [
//     {brand: "Chanel"},
//     {brand: "Gucci"},
//     {brand: "Jimmy Choo"},
//     {brand: "Alexander McQueen"},
//     {brand: "Louis Vuitton"},
//     {brand: "Christian Louboutin"},
//   ],
//   sizes: [
//     {size: 2},
//     {size: 3},
//     {size: 4},
//     {size: 5},
//     {size: 6},
//     {size: 7},
//   ],
//   colors: [
//     {color: "Black"},
//     {color: "Pink"},
//     {color: "Blue"},
//     {color: "Purple"},
//     {color: "Gold"},
//     {color: "Red"},
//   ],
//   // prices: [
//   //   {price: 1899.99},
//   //   {price: 2800.00},
//   //   {price: 2900.00},
//   //   {price: 2999.99},
//   //   {price: 4200.00},
//   //   {price: 4500.00},
//   // ],
//   // stocks: [
//   //   {stock: 2},
//   //   {stock: 3},
//   //   {stock: 4},
//   //   {stock: 5},
//   //   {stock: 8},
//   //   {stock: 10},
//   // ]
// });
