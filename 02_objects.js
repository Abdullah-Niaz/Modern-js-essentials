const person = {
    name: "Omer",
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },
    walk: function () { },
    talk: function () { },
}

person.setName("Hamza");
console.log(person.getName());
