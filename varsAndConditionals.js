/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Obiwan Kenobi and
    Anakin Skywalker.
*/ 

// if(condition){
    //code block (runs if condition is true)
// }

let kenobiAttack = 25
let skywalkerAttack = 35

if (kenobiAttack > skywalkerAttack){
    console.log('Obiwan has a better attack')
} else if(kenobiAttack < skywalkerAttack) {
    console.log('Anakin has the better attack')
} else {
    console.log('Obiwan and Anakin have the same attack')
}


let kenobiHealth = 100
let kenobiDefense = 0

if(skywalkerAttack >= kenobiHealth){
    console.log('Obiwan Was slain')
} else {
    kenobiHealth = kenobiHealth - skywalkerAttack
    // kenobieHealth -= skywalkerAttack
    console.log("Obiwan's health is now " + kenobiHealth)
}

kenobiDefense += 30 //increasing his defense up 30 points

//console.log(kenobiDefense)

if((kenobiHealth + 50) >= 100){
    kenobiHealth = 100
} else {
    kenobiHealth += 50
}

for(let i = 0; i < 5; i++){
    kenobiHealth -= (skywalkerAttack - kenobiDefense)
    console.log(`Obiwan's heath is now ${kenobiHealth}`)
}

while(kenobiHealth > 0){
    kenobiHealth -= (skywalkerAttack - kenobiDefense)
    console.log(kenobiHealth)
    if(kenobiHealth <= 0){
        console.log('Obiwan has been slain')
    }
}