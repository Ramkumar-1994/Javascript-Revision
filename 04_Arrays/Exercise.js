let Arr=[5,8,10,7,9,11]

Arr.splice(3,3,17,19,111)

console.log(Arr)

Arr[0]=100
console.log(Arr)

Arr.splice([Arr.length-1],0,200)
console.log(Arr)

Arr.push(1000)
console.log(Arr)

Arr.splice(Arr.length/2,0,0)
console.log(Arr)