// app.js
import { Person } from "./person.js";
import { Teacher } from "./teacher.js";

const p = new Person("Helo");
console.log(p.name); // "Helo"
p.walk(); // Outputs: "Helo, Walk"

const t = new Teacher("John", "MSc");
console.log(t.name); // "John"
console.log(t.degree); // "MSc"
t.walk(); // Outputs: "John, Walk"
t.teach(); // Outputs: "Teach"
