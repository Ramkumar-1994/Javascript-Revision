for(let i=1;i<=5;i++)
{
   console.log(i)  
}

let arr=['apple','orange','grapes','mango']

for(let key of arr)
  {
    console.log(key)
  }

arr.forEach((elem)=>
{
  console.log(elem)
})


let dropdown=document.getElementById('dropdown')

let select=document.createElement('select')

dropdown.appendChild(select)


let dept=['ECE','EEE','MECH','IT','CSE']


dept.map((department)=>
{
  let options=document.createElement('option')
    select.appendChild(options)
    options.value=department
    options.innerText=department
})

