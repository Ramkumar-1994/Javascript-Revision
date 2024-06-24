// Print a random lette from a string

let name='Bharathi'

let random=Math.floor(Math.random()*name.length)

console.log(name[random])

let itemCount=5

let Price=19

console.log(`You have ${itemCount} items in your cart.
Your bill amount is $${itemCount*Price} `)