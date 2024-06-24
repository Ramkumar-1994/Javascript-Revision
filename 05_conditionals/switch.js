let citylist = document.getElementById("citylist");
let btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  let citySelected = citylist.options[citylist.selectedIndex].value;
  console.log(citySelected);
  let result=document.getElementById('result')
  let population = 0;
  let language = "";
  let literacyRate = 0;
  console.log(citySelected)
  switch(citySelected) {
    case "Bengaluru":
      population = 4646732;
      literacyRate = 88.71;
      language = "kannada";
      break;

    case "Chennai":
      population = 5646732;
      literacyRate = 90.71;
      language = "Tamil";
      break;

    case "Kolkata":
      population = 4646732;
      literacyRate = 80.71;
      language = "Bengali";
      break;

    case "Mumbai":
      population = 6447322;
      literacyRate = 80.71;
      language = "Marathi";
      break;

    case "Delhi":
      population = 4646732;
      literacyRate = 85;
      language = "Hindi";
      break;
  }
  result.innerText=`Population of ${citySelected} is ${population} and literacy Rate is ${literacyRate} and language spoken is ${language}`
});
