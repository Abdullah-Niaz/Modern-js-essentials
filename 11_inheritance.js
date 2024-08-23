class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name}, Walk`)
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("Teach");
    }
}
const teac = new Teacher("Mosh");
teac.walk();
teac.teach();
console.log(teac.name);  