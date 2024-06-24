// let msg=document.getElementById('message')

// msg.innerHTML='Welcome to our Website'

// Length cm to inches

let leng=Number(document.getElementById('length')).value

let button=document.querySelector('button')

let result=document.getElementById('result')

button.addEventListener('click',function()
{
  result.innerText=`${(leng/2.54).toFixed(2)}inches`
})

//temperature converter

function convert()
{
  let temp=document.getElementById('temp').value

  let btn=document.querySelector('btn')

  let result1=document.getElementById('result1')

  let temperature=Number(temp)

  let celToFar=(9/5)*temperature+32

  result1.innerText=`${celToFar.toFixed(2)}F`
     
  console.log('clicked')
}