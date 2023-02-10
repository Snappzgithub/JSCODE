const crushes = [];

const listCrushes = () => {
  alert(`Your crushes: ${crushes.join(', ')}`);
};

const addCrush = () => {
  const name = prompt(`Enter the name of your crush:`);
  crushes.push(name);
  alert(`${name} has been added to your crushes.`);
};

const countCrushes = () => {
  alert(`You have ${crushes.length} crushes.`);
};
const wordToRemove = ()=> {
    const wordToRemove = prompt("Please enter the name of your crush you want to remove");  // prompt the user for the word to remove

const index = crushes.indexOf(wordToRemove);  // find the index of the word
if (index !== -1) {  // check if the word was found
  crushes.splice(index, 1);  // remove the word at the index
  alert(`${wordToRemove} has been removed from the array.`);
} else {
  alert(`${wordToRemove} was not found in the array.`);
}
}
while (true) {
  const option = prompt(`Menu:\n\na. List Crushes\nb. Add Crush\nc. Count Crush\nd. Remove a Crush\ne. Exit\n \nEnter a letter to select an option:`);
  if (option === 'a') {
    listCrushes();
  } else if (option === 'b') {
    addCrush();
  } else if (option === 'c') {
    countCrushes();
} else if (option === 'd') {
    wordToRemove();
  }
  else if (option === 'e') {
    break;
   }
    else {
    prompt(`Invalid option.`);
  };

}