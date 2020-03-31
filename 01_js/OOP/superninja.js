// Create a Ninja class
// add an attribute: name
// add an attribute: health
// add a attribute: speed - give a default value of 3
// add a attribute: strength - give a default value of 3
// add a method: sayName() - This should log that Ninja's name to the console
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
// add a method: drinkSake() - This should add +10 Health to the Ninja


class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`this ninja is named ${this.name}`);
    }
    showStats(){
        console.log(`${this.name}'s strength is ${this.strength}. \n${this.name}'s speed is ${this.speed}. \n${this.name}'s health is ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}


// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom() --> call drinkSake(), then console.log("What one programmer can do in one month, two programmers can do in two months.")
// create a method: drinkSake()

class Sensei extends Ninja{
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
console.log(ninja1)
ninja1.drinkSake()
console.log(ninja1.health)

const superSensei = new Sensei("Master Splinter",20);
console.log(superSensei)
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
console.log(superSensei)
