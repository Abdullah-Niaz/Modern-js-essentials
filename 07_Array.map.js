const colors = ['read', 'green', 'blue']

// const item = colors.map(function (item) {
//     return '<i>' + item + '</i>'
// })
// console.log(item)

// concise way of writing a code
// const item = colors.map(item => '<i>' + item + '</i>')
// console.log(item)

// we can use template litterals instead of above returning style
const item = colors.map(item => `<i> + ${item} + </i>`)
console.log(item)