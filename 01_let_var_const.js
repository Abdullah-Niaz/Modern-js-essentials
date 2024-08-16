// var can be modifed 
// it's scope is global

array  = [1,2,3,4,45,5,6,7,8,10,123,1232,4342]
for (var i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`Element: ${element} with Index: ${i}`);
}

console.log(`Outside the Block Scope: ${i}`);
