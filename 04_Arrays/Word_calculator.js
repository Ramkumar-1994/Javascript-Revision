let textmsg=document.getElementById('textmsg')

let calbtn=document.getElementById('calculatebtn')

let count=document.getElementById('countwords')

function countWords()
{
  let counting=textmsg.value.split(' ')
  console.log(counting)
  count.innerText=`${counting.length} Words`
}