let products = ["Snowbear", "Bobot", "Bulad"]
let stocks = [5, 4, 10]

function restockItems(){
    let selectedItem = prompt(getItems() + "Enter the number of the product you want to restock:");
    let selectedQuantity = prompt("Enter quantity: ")
    selectedItem = parseInt(selectedItem) - 1;
    selectedQuantity = parseInt(selectedQuantity)
    if(selectedItem>=0 && selectedItem < products.length){
        stocks[selectedItem] += selectedQuantity;
        alert(selectedQuantity + " " + products[selectedItem] + "(s) restocked!");
    }
    else{
        alert("Invalid Item number!")
    }
}


function buyItems(){
    let selectedItem = prompt(getItems() + "Enter the number of the product you want to buy:");
    let selectedQuantity = prompt("Enter quantity: ")
    selectedItem = parseInt(selectedItem) - 1;
    selectedQuantity = parseInt(selectedQuantity)
    if(selectedItem>=0 && selectedItem < products.length){
        if (stocks[selectedItem] >= selectedQuantity) {
            stocks[selectedItem] -= selectedQuantity;
            alert(selectedQuantity + " " + products[selectedItem] + "(s) purchased!");
        } else {
            alert("This item is out of stock!");
        }
    }
    else{
        alert("Invalid Item number!")
    }
}

function getItems(){
    let getItem = ""
    for (let i = 0; i < products.length; i++) {
        getItem += i + 1 + ". " + products[i].concat(" = " + stocks[i]) + "\n"
    }
    return getItem
}

function printProds() {
    let operator = prompt("Welcome to my Store!\n\n" + getItems() + "\n"+
      "A - Buy\n"+
      "B - Restock\n"+
      "C - Add Product\n"+
      "D - Exit");
  
    if (operator == "A" || operator == "a") {
      buyItems();
    } else if (operator == "B" || operator == "b") {
      restockItems();
    } else if (operator == "C" || operator == "c") {
      let name = prompt("Add Product Name:");
      products.push(name);
      let quantity = prompt("Add Product Quantity:");
      stocks.push(quantity);
    } else if (operator == "D" || operator == "d") {
      return;
    } else {

      confirm("Invalid Keyword!");
    }
    printProds();
  }
  
printProds();