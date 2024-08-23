const person1 = {
    name: "hello",
    walk() {
        console.log("walk");
    }
}
const person2 = {
    name: "hello",
    walk() {
        console.log("walk");
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name}, Walk`)
    }
}
const omer = new Person("omer");
console.log(omer.walk);