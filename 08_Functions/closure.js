function outer(name)
{
  let outerVariable='Bread'
  function inner()
  {
    let innerVariable='Butter'
    console.log(innerVariable)
    console.log('Outer',outerVariable)
    console.log('hello',name)
  }
  return inner
}

let call1=outer('vidhya')

call1()

let call2=outer('John')

call2()

function makeAdder(x)
{
  return function (y)
  {
    return x+y
  }
}

let add=makeAdder(5)
console.log(add(6))


//Set and Map

let arrNew=[1,1,2,3,4,5,5,5,5,10,8]

let mySet=new Set()
mySet.add(4)
mySet.add(5)
mySet.add('pqr')
mySet.add({a:1,b:2})

console.log(mySet)

let myObj={a:1,b:2}

mySet.add(myObj)

console.log(mySet)

