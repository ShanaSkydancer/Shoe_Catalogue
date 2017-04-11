  var myTemplate = document.getElementById('myTemplate').innerHTML;
  var myTemplateInstance = Handlebars.compile(myTemplate);

if (localStorage.getItem('localData') === null){
  var shoeStock = [
      {
        brand: "Alexander McQueen",
        size: 2,
        color: "Gold",
        price: 4200.00,
        stock: 3
      },
      {
        brand: "Chanel",
        size: 3,
        color: "Pink",
        price: 2800.00,
        stock: 10
      },
      {
        brand: "Christian Louboutin",
        size: 4,
        color: "Red",
        price: 4400.00,
        stock: 4
      },
      {
        brand: "Gucci",
        size: 5,
        color: "Purple",
        price: 1899.99,
        stock: 8
      },
      {
        brand: "Jimmy Choo",
        size: 6,
        color: "Black",
        price: 2900.00,
        stock: 5
      },
      {
        brand: "Louis Vuitton",
        size: 7,
        color: "White",
        price: 2999.99,
        stock: 2
      }
  ];

} else {

  var shoeStock = JSON.parse(localStorage.getItem('localData'));
}

var data = {option : shoeStock};
// console.log(data);
document.getElementById("data").innerHTML = myTemplateInstance(data);

window.onload = function() {
  document.getElementById('forUpdate').style.display = 'none';
};

function myToggle() {
    var myForm = document.getElementById("forUpdate");
      if (myForm.style.display == "block") {
          myForm.style.display = "none";
          myForm.style.visability = "hidden";
      } else {
          myForm.style.display = "block";
          myForm.style.visability = "visable";
      }
}

var addStockButton = document.querySelector('#addStockButton');
addStockButton.addEventListener('click', function(){
  event.preventDefault();

  // for (var i = 0; i < shoeStock.length; i++) {
    // var selectedItem = shoeStock[i]
    // var brand = selectedItem.brand;
    // var size = selectedItem.size;
    // var color = selectedItem.color;

    var newBrand = document.getElementById("newBrand").value;
    var newSize = document.getElementById("newSize").value;
    var newColor = document.getElementById("newColor").value;
    var newPrice = document.getElementById("newPrice").value;
    var newStock = document.getElementById("newStock").value;

    // if (newBrand !== brand && newSize !== size && newColor !== color){
      shoeStock.push({
        brand: newBrand,
        size: newSize,
        color: newColor,
        price: newPrice,
        stock: newStock,
      });
    // }
      // } else {
      // alert("You have entered a brand, size and or color that already exists... Please try again")
      var newData = {option : shoeStock};
      // document.getElementById('searchButton').style.display = 'none';
      document.getElementById("selectInput").innerHTML = myTemplateInstance(newData);
      localStorage.setItem('localData', JSON.stringify(shoeStock));
      // }
})

var searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', function() {
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

  var messageOutput = dataOutput.getElementsByTagName('p')[0];
  var outOfStock = "Out of Stock";
  var stockFound = false;

    for (var i = 0; i < shoeStock.length; i++) {
      selectedItem = shoeStock[i]
      var brandData = selectedItem.brand;
      // console.log(brandData);
      var sizeData = selectedItem.size;
      // console.log(sizeData);
      var colorData = selectedItem.color;
      // console.log(colorData);
      var priceData = selectedItem.price;
      // console.log(priceData);
      var stockData = selectedItem.stock;
      // console.log(stockData);
        if (brandData === selectedBrand && colorData === selectedColor) {
          messageOutput.innerHTML = "Price: R" + (priceData) + " " + "Current Stock: " + (stockData);
          stockFound = true;
        }
    }
    if (stockFound === false){
      messageOutput.innerHTML = outOfStock;
    }
});
