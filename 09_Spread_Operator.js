const first = [1, 2, 3]
const second = [4, 5, 7]

// const combined = first.concat(second);
// console.log(combined);

// spread operator 
// const combined = [...first, 'a', ...second, 'c'];
// console.log(combined);


// we can also clone a array 
const clone = [...first];
// console.log(clone);


const firstobj = { name: "omer" };
const secondobj = { job: "instructor" };
const combinedobj = { ...firstobj, ...secondobj, location: 'AUS' }
// console.log(combinedobj) 

const cloneobj = { ...firstobj };
console.log(cloneobj);