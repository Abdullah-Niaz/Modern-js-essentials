// const person = {
//     talk() {
//         var self = this;
//         setTimeout(function () {
//             console.log(self);
//         }, 1000);
//     }
// }
const person = {
    talk() {
        setTimeout(() => {
            console.log(this);
        }, 1000);
    }
}
r = person.talk();
console.log(r);