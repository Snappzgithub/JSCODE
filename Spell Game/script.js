let remainingMp = 100;
let skills = ["Fireball", "Freeze", "Earthquake"];
let manaPoints = [20, 15, 25];

function listItems (){
let list = "";

for (let i = 0; i < skills.length; i++) {
    list += i + 1 + ". " + skills[i] + " " + manaPoints[i] +"\n";   
}
   return list;
}

function castSpell(){
  let selectedIndex = parseInt(prompt("Remaining HP :"+ remainingMp + "\n\n" + "What Spell do you want to cast?"+"\n"+listItems()))-1

  if(manaPoints[selectedIndex] <= remainingMp ){
  remainingMp -= manaPoints[selectedIndex]
  alert(skills[selectedIndex] + "has been casted!")
  }
  else{
    alert("Out of mana");
  }
}


function forget(){
  let index = parseInt(prompt("Select number Do you want to remove!" + "\n\n" + listItems() ))-1
  
  if(index >= 0 ){
    skills.splice(index,1);
    manaPoints.splice(index,1);
  }
else[
  alert("Invalid keys")
  ]
}

function recover(){
  remainingMp += 50;

  if (remainingMp > 100){
    remainingMp = 100;
    alert("Full of Mana");
  }

}


function main(){
    let operator = prompt(
      
      "Hello Hero!\n" + "Remaining MP :"+ " "+ remainingMp + "\n\n" + listItems() + "\n" +
        "1. Cast Spell \n" +
        "2. Learn Spell\n" +
        "3. Forget Spell\n" +
        "4. Recover MP (+50)\n" +
        "5. Exit"
    );    

if (operator == "1") {
      castSpell();
    }  

else if (operator == "2") {
      let spellName = prompt("Add a Spell name!")
      skills.push(spellName)
      let spellQty = parseInt(prompt("How mana it will cost ?"))
      manaPoints.push(spellQty)
    }   

else if (operator == "3") {
      forget();
    }   

else if (operator == "4") {
      recover();
    }  

else if (operator == "5") {
      return;
}

else {
      alert("Invalid Keyword!");
    }  
main();
}  
  main();

