// var can be modifed 
// it's scope is global

array  = [1,2,3,4,45,5,6,7,8,10,123,1232,4342]
for (var i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`Element: ${element} with Index: ${i}`);
}

console.log(`Outside the Block Scope: ${i}`);



// let can be modified
// it is accessible inside the block only
array  = [1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
console.log(i);


// const value can not be modified 
// accessible inside block only
for(const i = 0 ; i < 10; i++){
    console.log(i);
}
console.log(i);

