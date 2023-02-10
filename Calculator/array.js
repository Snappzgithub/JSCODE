let crushList = [];

while (true) {
let userInput = prompt("Enter a number for one of the following options: \n 1. Ask for three crush names \n 2. Add new crush \n 3. Exit");

if (userInput == "1") {
let userCrushes = prompt("Enter up to three of your crush's names separated by commas: ");
let inputArray = userCrushes.split(",");
for (let i = 0; i < inputArray.length; i++) {
    crushList.push(inputArray[i]);
  }
  
  console.log(crushList);
} else if (userInput == "2") {
    let newCrush = prompt("Enter the name of your new crush: ");
    crushList.push(newCrush);
    } else if (userInput == "3") {
    break;
    }
    }
    
    console.log(crushList);  