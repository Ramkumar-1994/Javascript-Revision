function isPositive(num)
{
  return num>0
}

console.log(isPositive(4))

let hex=['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
function generateColor()
{
  let random=Math.floor(Math.random()*hex.length)
  return hex[random]
}

function hexGenerator()
{
  let hexColorGenerator='#'
  for(let i=0;i<6;i++)
    {
      hexColorGenerator+=generateColor()
    }
  return hexColorGenerator
}

let hexcode=document.getElementById('hexcode')

let button=document.querySelector('button')

function changeColor()
{
  let color=hexGenerator()
  hexcode.innerText=color
  document.body.style.backgroundColor=color
  console.log(color)
}

//Arrow Function
let arr=[1,2,3,4,8,9,7,4]
let sumOfArray=(arr)=>
  {
    let sum=0
    for(let val of arr)
      {
        sum+=val
      }
    return sum
  }

console.log(sumOfArray(arr))

// CallBack Function

function greet(name)
{
  console.log('Hello',name)
}

function greetName(cb)
{
  cb('Ram')
}
greetName(greet)

//forEach


let arrName=['deepa','Harini','ramya']

arrName.forEach((name)=>
{
  console.log(name)
})


arrName.forEach((val,index,arrName)=>
{
  arrName[index]=val.toUpperCase()
})

console.log(arrName)

let dept=['ECE','CSE','IT','MECH']
let drop=document.getElementById('drop')
let select=document.createElement('select')
  drop.appendChild(select)
dept.forEach((department)=>
{
  let options=document.createElement('option')
  select.appendChild(options)
  options.value=department
  options.innerText=department
})

//forEach Method

let deptEng=['ECE','CSE','IT','EEE','MECH','CIVIL']
let listitem=document.getElementById('listitem')
let ulist=document.createElement('ul')
listitem.appendChild(ulist)
deptEng.forEach((eng)=>
{
  let englist=document.createElement('li')
  ulist.appendChild(englist)
  englist.innerText=eng
})


//Find the sum of positive numbers only

let posNum=[6,-5,7,-2,4,6,-1]
let sum=0
posNum.forEach((positive)=>
{
  if(positive>=0)
    {
      sum+=positive
    }
})

console.log(sum)

//Array Methods(Map,Filter,Reduce)

let priceUSD=[20,35,13]

//Convert this array to INR Price

let priceINR=priceUSD.map((price)=>
{
  return price*83
})

console.log(priceINR)

let studentDetail=[
  {
    name:'John',age:15
  },
  {
    name:'Radha',age:45
  },
  {
    name:'Kaushik',age:12
  },
  {
    name:'Anu',age:21
  }
]

console.log(studentDetail)

let studentAge=studentDetail.map((student)=>student.age)

console.log(studentAge)

//Filter Method

let cost=[73,230,130,58,92,100]

let lessCostProduct=cost.filter((product)=>product<100)

console.log(lessCostProduct)

//Reduce

let cartTotal=cost.reduce((curr,prev,index,cost)=>curr+prev)

console.log(cartTotal)

let arr2d=[
  ['a','b','c'],
  ['c','d','f'],
  ['d','f','g']
]

let arrCount=arr2d.flat().reduce((curr,prev,index,arr2d)=>
{
      if(curr[prev])
        {
          curr[prev]++
        }
      else{
        curr[prev]=1
      }
      return curr
},{})

console.log(arrCount)

//Exercise

let array = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3];

let uniqueArray = array.filter((value, index) => array.indexOf(value) === index);

console.log(uniqueArray); // Output: [4, 6, 2, 3, 1, 5, 7, 8]


let name='Robert Andrew George'.split(' ').map((letter)=>
{
  return letter[0]
})

let result=name.join('')

console.log(result)









