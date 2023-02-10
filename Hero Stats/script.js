    let expPool = 200;
    let heroes = [
        {
            name: 'Ibong Adarna',
            level: 1,
            exp: 20,
        },
        {
            name: 'Mang Tomas',
            level: 1,
            exp: 15,
        },
        {
            name: 'Rastaman',
            level: 1,
            exp: 10,
        },

    ];
    function resExpPool(){
        if (expPool < 200) {
            expPool = 200;
            alert("Exp pool has been replenished!");
        } else {
            alert("Exp pool is already full!");
        }
    }


    function list() {
        let heroList = ""
        for (let i = 0; i < heroes.length; i++) {
        heroList += `${i + 1}. ${heroes[i].name} LV ${heroes[i].level} (${heroes[i].exp} exp) \n`;
        }
        return heroList;
        }
    function remove_hero (){
    let index = parseInt(prompt("Select the number you want to remove!" + "\n\n" + list() ))-1;
    
    if(index >= 0 ){
        heroes.splice(index,1);
    }

    }
    function addexp() {
        let cHeroes = parseInt(prompt("Which hero:\n" + list())) - 1;
        if (isNaN(cHeroes) || cHeroes < 0 || cHeroes >= heroes.length) {
            alert("Invalid input!");
            return;
        }
        if (heroes[cHeroes].exp === "MAX") {
            alert(`${heroes[cHeroes].name} is already at max level and cannot gain more experience!`);
            return;
        }
        let addExp = parseInt(prompt(`How much exp you want to add?\nremaining exp pool:${expPool}` ));
        if (isNaN(addExp) || addExp < 0) {
            alert("Invalid input!");
            return;
        }
        if (addExp > expPool) {
            alert(`Not enough exp in the pool. Only ${expPool} exp is available.`);
            return;
        }
        heroes[cHeroes].exp += addExp;
        expPool -= addExp;

        if (heroes[cHeroes].exp >= 50) {
            let exceedExp = heroes[cHeroes].exp - 50;
            heroes[cHeroes].exp = 0;
            heroes[cHeroes].level += 1;
            expPool += exceedExp;
            if (exceedExp > 0) {
                alert(`${exceedExp} excess exp has been returned to the exp pool`);
            }

            if (heroes[cHeroes].level >= 5) {
                heroes[cHeroes].exp = 'MAX';
            } else {
                alert(`${heroes[cHeroes].name} has leveled up to level ${heroes[cHeroes].level}!`);
            }
        }
        return;
    }


        

    function addHero() {
        let name = prompt("Name your champion:");
        heroes.push({
            name: name,
            level: 0,
            exp: 0,
        });
        alert(`${name} is added to your list!`)
    }

    function main(){
            let operator = prompt(
            
            "Welcome To Local Legends!!\n" + list()+ "\n" + "Exp Pool Remaining: " + expPool + "\n" +
                "1. Add new Hero \n" +
                "2. Remove Hero\n" +
                "3. Select Hero to LVL up\n" +
                "4. Replenish exp pool\n" +
                "5. Exit"
            );    
    
        if (operator == "1") {
            addHero();
            }  
        
        else if (operator == "2") {
            remove_hero();
            }   
        
        else if (operator == "3") {
            addexp();
            }   
        
        else if (operator == "4") {
            resExpPool();
            }  
        
        else if (operator == "5") {
            alert("Goodbye!");
            return;
        }
        
        else {
            alert("Invalid Keyword!");
            }
        main();
        }  
    main();