let cities=['chennai','Mumbai','Bangalore','Kolkata','Jaipur']

console.log(cities.length)

console.log(cities[2])

console.log(cities[cities.length-1])

let arr=[5,6,7,6,'hello',[8,7,23]]

console.log(arr[5][1])

let matrix=[[3,4,5],[4,5,7],[6,7,8]]

console.log(matrix[0][2])

console.log(matrix[2][1])

// Array Methods

let array=['a','b','c','d','e']

array.push('f')

console.log(array)

let array2=[1,2,3,1,1,1,1]

array2.splice(3,4,4,5,6,7)
console.log(array2)

console.log(array2.slice(2,))

array2.reverse()
console.log(array2.join().split(','))

//Concat

let firstArr=[1,2,3]
let secondArr=[4,5,6]
let full=firstArr.concat(secondArr)
console.log(full)

let joined=[...firstArr,...secondArr]
console.log(joined)

