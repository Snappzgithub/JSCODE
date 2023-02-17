let Hero = {
  name: "Hero",
  HP: 100,
  MP: 100,
};

let Villain = {
  name: "Villain",
  HP: 100,
  MP: 100,
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
  }
}

function resetValues() {
  Hero.HP = 100;
  Hero.MP = 100;
  Villain.HP = 100;
}

function startBattle() {
  let battleChoice = parseInt(
    prompt(`Choose an option:
    1. Start Battle
    2. Reset
    3. Exit`)
  );
  if (battleChoice === 1) {
    alert("Hero's turn");
    let heroChoice = parseInt(
      prompt(`Choose an action:
    1. Attack
    2. Spell Attack
    3. Pass
    4. Exit`)
    );
    if (heroChoice === 1) {
      heroAttack();
    } else if (heroChoice === 2) {
      heroSpell();
    } else if (heroChoice === 3) {
      alert("Hero passed the turn");
    } else if (heroChoice === 4) {
      return;
    } else {
      alert("Invalid choice. Please try again.");
    }
    if (Villain.HP > 0) {
      alert("Villain's turn");
      villainAttack();
    }
  } else if (battleChoice === 2) {
    if (Hero.HP !== 100 || Hero.MP !== 100 || Villain.HP !== 100) {
      alert("Values are already full, no need to reset");
    } else {
      resetValues();
      alert("HP and MP of Hero and Villain have been reset!");
    }
  } else if (battleChoice === 3) {
    alert("Hero quit the battle");
    return;
  } else {
    alert("Invalid choice. Please try again.");
  }
  Hero.HP = Math.max(0, Hero.HP);
  Villain.HP = Math.max(0, Villain.HP);
  startBattle();
}
startBattle();