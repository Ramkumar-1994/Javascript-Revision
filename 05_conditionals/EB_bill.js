// Eb Bill Amount Calculator

/*
For first 50 units Rs.0.75/unit
For next 100 units Rs.1.00/unit
For next 100 units Rs.1.30/unit
For unit above 250 units Rs.1.50/unit

*/

function calculate()
{
  let units=document.getElementById('units')

let result=document.getElementById('result')
let unit=units.value
let rate;
let first_slot=50*0.75
let second_slot=100*1.00
let third_slot=100*1.30

if(unit<=50)
{
  rate=0.75*unit
}
else if(unit<=150)
{
    rate=(unit-50)*1.00+first_slot
}
else if(unit<=250)
{
  rate=(unit-150)*1.30+first_slot+second_slot
}
else
{
  rate=(unit-250)*1.50+third_slot+second_slot+first_slot
}
result.innerText=`Your Eb Bill Amount is ${rate}`
}
