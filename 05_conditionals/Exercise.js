// Palindrome Checker

let string='Mada'.toLowerCase().split(' ').join('')
console.log(string)

let reverse=''

for(let i=0;i<string.length;i++)
  {
    reverse=string[i]+reverse
  }

console.log(reverse.split(' ').join(''))

if(string===reverse)
{
  console.log("Palindrome")
}

else
{
  console.log('Not a Palindrome')
}