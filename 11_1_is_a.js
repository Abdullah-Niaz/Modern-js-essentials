class Animal {
    eat() {
        console.log("This animal eats.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("The dog barks.");
    }
}

const myDog = new Dog();
myDog.eat();  // Inherited from Animal
myDog.bark(); // Defined in Dog
