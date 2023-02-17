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

  Hero.HP = Math.max(0, Hero.HP);
  Hero.MP = Math.max(0, Hero.MP);
  Villain.HP = Math.max(0, Villain.HP);
  Villain.MP = Math.max(0, Villain.MP);

  function attack(attacker, defender, damage) {
    defender.HP -= damage;
    alert(`${attacker.name} attacked and took ${damage} HP from ${defender.name}`);
    if (defender.HP <= 0) {
    alert(`${defender.name} has been defeated! ${attacker.name} is victorious!`);
    }
    }
  
  function heroSpell() {
    if (Hero.MP >= 30) {
      Hero.MP -= 30;
      attack(Hero, Villain, 50);
      } else {
      alert("Hero does not have enough MP to cast the spell");
      }
      }
  
function resHeroHP() {
    if (Hero.HP !== 100 ) {
      Hero.HP = 100;
      alert("Hero's HP has been restored!");
      } else {
      alert("HP is already full, no need to restore");
      }
    }
function resHeroMana() {
      if (Hero.MP !== 100 ) {
        Hero.MP = 100;
        alert("Hero's MP has been restored!");
        } else {
        alert("MP is already full, no need to restore");
        }
      }
function resetVillHP() {
        if (Hero.HP !== 100 ) {
          Hero.HP = 100;
          alert("Hero's HP has been restored!");
          } else {
          alert("HP is already full, no need to restore");
          }
}

  function startBattle() {
    let choice = parseInt(prompt(`
      Battle Status
      Hero's Health: ${Hero.HP}
      Hero's Mana: ${Hero.MP}
      Villains Health: ${Villain.HP}
      Villains Mana: ${Villain.MP}

      Choose your next move:
      1. Hero Attack
      2. Villain Attack
      3. Hero Cast Spell
      4. Villain Cast Spell
      5. Restore Hero's HP
      6. Restore Hero's MP
      7. Restore Villain's HP
      8. Restore Villain's MP
      9. Exit`));

    if (choice === 1) {
      attack(Hero, Villain, 25);
      if (Villain.HP > 0) {
      attack(Villain, Hero, 25);
      }
      } else if (choice === 2) {
      attack(Villain, Hero, 25);
      } else if (choice === 3) {
      heroSpell();
      if (Villain.HP > 0) {
      attack(Villain, Hero, 25);
      }
      } else if (choice === 4) {
      attack(Villain, Hero, 25);
      } else if (choice === 5) {
      resetValues();
      alert("HP and MP of Hero and Villain have been reset!");
      } else if (choice === 6) {
      alert("Hero quit the battle");
      return;
      } else {
      alert("Invalid choice. Please try again.");
      }
  
    startBattle();
  }
  startBattle();