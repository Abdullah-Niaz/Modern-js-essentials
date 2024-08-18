const person = {
    name: "omer",
    walk() {
        console.log(this);
    }
}

console.log(person.walk());
console.log(this)