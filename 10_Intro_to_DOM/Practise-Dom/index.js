// alert('Welcome')

let result=document.getElementById('result')
let items=0
function bagbtn(output)
{
  if(items>=0)
    {

      items=items+output
      result.innerText=`Your Bag has ${items} items`
    }
}


