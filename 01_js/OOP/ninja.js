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


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
console.log(ninja1)
ninja1.drinkSake()
console.log(ninja1.health)
