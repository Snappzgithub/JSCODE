const items = [];

const listItems = () => {
  alert(`Your items: ${items.join(', ')}`);
};

const addItemStart = () => {
  const name = prompt(`Enter the name of your Item:`);
  items.unshift(name);
  alert(`${name} has been added to your items.`);
};

const addItemEnd = () => {
    const name = prompt(`Enter the name of your Item:`);
    items.push(name);
    alert(`${name} has been added to your items.`);
};

const removeItemStart = () => {
    if (items.length === 0) {
      alert(`Your list is empty.`);
      return;
    }

    const removedItem = items.shift();
    alert(`${removedItem} has been removed from the start of the list.`);
};

const removeItemEnd = () => {
    if (items.length === 0) {
      alert(`Your list is empty.`);
      return;
    }
    const removedItem = items.pop();
    alert(`${removedItem} has been removed from the end of the list.`);
}
const removeSpecificItem = () => {
    const index = parseInt(prompt(`Enter the index of the element you want to remove:`));
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      alert(`The element at index ${index} has been removed from the array.`);
    } else {
      alert(`Invalid index.`);
    }
  };

while (true) {
const option = prompt(`
a. List items[${items.join(', ')}]\n`
+ `b. Add Item(Start)\n`
+ `c. Add Item(End)\n`
+ `d. Remove a Item(Start)\n`
+ `e. Remove a Item(End)\n`
+ `f. Remove Specific Item\n`
+ `g. Exit\n`
+ `\nEnter a letter to select an option:`);

if (option === 'a') {
listItems();
} else if (option === 'b') {
addItemStart();
} else if (option === 'c') {
addItemEnd();
} else if (option === 'd') {
removeItemStart();
} else if (option === 'e') {
removeItemEnd();
} else if (option === 'f') {
removeSpecificItem();
} else if (option === 'g') {
break;
} else {
prompt('Invalid option.');
}
}