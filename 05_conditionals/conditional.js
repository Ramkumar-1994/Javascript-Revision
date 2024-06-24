let pwd=true

if(pwd)
  {
    console.log('you are logged in')
  }
else
{
  console.log('Incorrect Password')
}

console.log('Welcome to NetFlix')

let age=60
let gender='female'

if(age>60 && gender=='female')
  {
    console.log('You are get discount')
  }
else
{
  console.log('No discount')
}

let num1=50
let num2=60

let max;

if(num1>num2)
  {
    max=num1
  }
else{
  max=num2
}

console.log(max)

max= num1>num2?console.log(num1):console.log(num2)
console.log(max)


//FD Rate Calculator

let month=10
let fd;
let amount=100000
if(month<3)
{
  fd=5.8
}
else if(month<=6)
{
  fd=6.5
}
else if(month<=9)
{
  fd=6.8
}
else
{
  fd=7
}

console.log(`FD rate is ${fd}%`)
























