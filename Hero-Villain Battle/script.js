let Hero = {
  name: "Hero",
  HP: 100,
  MP: 100
};

let Villain = {
  name: "Villain",
  HP: 100,
  MP: 100
};


function heroAttack() {
  Villain.HP -= 25;
  alert("Hero attacked and took 25 HP from Villain");
  if (Villain.HP <= 0) {
      alert("Villain has been defeated! Hero is victorious!");
      
  }
}


function heroSpell() {
  if (Hero.MP >= 30) {
      Hero.MP -= 30;
      Villain.HP -= 50;
      alert("Hero casted a spell and took 50 HP from Villain");
      if (Villain.HP <= 0) {
          alert("Villain has been defeated! Hero is victorious!");
          
      }
  } else {
      alert("Hero does not have enough MP to cast the spell");
  }
}


function villainAttack() {
  Hero.HP -= 25;
  alert("Villain attacked and took 25 HP from Hero");
  if (Hero.HP <= 0) {
  alert("Hero has been defeated! Villain is victorious!");
  if (Villain.HP == 0) {
      alert("Unable to attack the dead!");
   }
  else {
  
   }
  }
}

function resetValues() {
    Hero.HP = 100;
    Hero.MP = 100;
    Villain.HP = 100; 
}

function startBattle() {
  let firstAttacker = Math.floor(Math.random() * 2) === 0 ? "Hero" : "Villain";
  alert(`${firstAttacker} will attack first!`);

let choice = parseInt(prompt(`
    Battle Status
    Hero's Health: ${Hero.HP}
    Hero's Mana: ${Hero.MP}
    Villains Health: ${Villain.HP}
    Villains Mana: ${Villain.MP}

    Choose your next move:
     1. Attack
     2. Cast Spell
     3. Reset
     4. Exit`));

if (choice === 1) {
  heroAttack();
  if (Villain.HP > 0) {
    villainAttack();
  }
} else if (choice === 2) {
  heroSpell();
  if (Villain.HP > 0) {
    villainAttack();
  }
} else if (choice === 3) {
  if (Hero.HP !== 100 || Hero.MP !== 100 || Villain.HP !== 100) {
    alert("Values are already full, no need to reset");
  } else{
    resetValues();
    alert("HP and MP of Hero and Villain have been reset!");
  }
} else if (choice === 4) {
  alert("Hero quit the battle");
  return;
} else {
  alert("Invalid choice. Please try again.");
}

startBattle();
}

startBattle();