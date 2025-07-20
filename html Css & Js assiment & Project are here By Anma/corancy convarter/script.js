//URL OF API TO FETHC DATA 
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/pkr.json";

const dropDown = document.querySelectorAll(".dropdown select");

for (code in countryList){
 console.log(code, countryList[code]);
}

// for (let select of dropDown)