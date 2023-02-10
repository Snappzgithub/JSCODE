let equipments = [
  {
    name: "Long Sword",
    weight: 10,
    price: 200,
    attack: 200,
    defense: 0
  },
  {
    name: "Tower Shield",
    weight: 5,
    price: 150,
    attack: 0,
    defense: 80
  },
  {
    name: "Chain Mail",
    weight: 2,
    price: 20,
    attack: 0,
    defense: 50
  }
];

let limitLoad = 50;

function listAll() {
  let equipStr = "";
  for (let i = 0; i < equipments.length; i++) {
    const equipment = equipments[i];
    equipStr +=
      i +
      1 +
      ". " +
      equipment.name +
      " \n" +
      "   * Weight: " +
      `${equipment.weight}kg` +
      "\n" +
      "   * Price: " +
      `${equipment.price}$` +
      "\n" +
      "   * Attack: " +
      equipment.attack +
      "\n" +
      "   * Defense: " +
      equipment.defense +
      " " +
      "\n";
  }
  return equipStr;
}
function list() {
  let equipmentList = "";
  for (let i = 0; i < equipments.length; i++) {
    equipmentList += `${equipments[i].name} LV ${equipments[i].weight}kg ${equipments[i].price}$ \n`;
  }
  return equipmentList;
}

function addEquipment() {
  let name = prompt(` ${list()} Enter Name: `);
  if (!name) {
    alert("No input entered!");

    return addEquipment();
  }

  let weight = parseInt(prompt(`Current Load: ${currentLoad()}kg/50kg\nEnter Weight: `));
  while (isNaN(weight) || weight + currentLoad() > limitLoad) {
    if (isNaN(weight)) {
      alert("Invalid weight entered!");
    } else {
      alert("Load exceeding!");
    }
    return;
  }

  let price = parseInt(prompt("Enter Price: "));
  while (isNaN(price)) {
    alert("Invalid price entered!");
    price = parseInt(prompt("Enter Price: "));
  }

  let attack = parseInt(prompt("Enter Attack: "));
  while (isNaN(attack)) {
    alert("Invalid attack entered!");
    attack = parseInt(prompt(`${list}Enter Attack: `));
  }

  let defense = parseInt(prompt("Enter Defense: "));
  while (isNaN(defense)) {
    alert("Invalid defense entered!");
    defense = parseInt(prompt("Enter Defense: "));
  }

  let equipment = {
    name: name,
    weight: weight,
    price: price,
    attack: attack,
    defense: defense
  };
  equipments.push(equipment);
}

function currentLoad() {
  let load = 0;
  for (let i = 0; i < equipments.length; i++) {
    load += equipments[i].weight;
  }
  return load;
}

function main() {
  let option = parseInt(
    prompt(
      "Welcome To Your Hero Inventory!\n" +
        `Current equipment load: ${currentLoad()}kg / ${limitLoad}kg\n` +
        listAll() +
        "\n\n" +
        "1 - Add Equipment\n2 - Exit"
    )
  );

  if (option == 1) {
    addEquipment();

  } else if (option == 2) {
    return;

  } else {
    alert("Invalid Keys!");
  }
  main();
}
main();
