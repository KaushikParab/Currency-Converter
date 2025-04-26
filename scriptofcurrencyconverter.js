const from = document.querySelector(".from");
const to = document.querySelector(".to");
let x,y;
let amount = document.querySelector("#inp");
const btn = document.querySelector('#btn');

let dropdown1 = document.querySelector(".sel-country #from");
let dropdown2 = document.querySelector(".sel-country #to");

let result = document.querySelector(".converted-result p");
const selectlist = (dropdown) => {
  for (currcode in countryList) {
    let newopt = document.createElement("option");
    newopt.innerText = currcode;
    newopt.value = currcode;
    dropdown.append(newopt);

    if (dropdown.name === "from" && currcode === "USD") {
      newopt.selected = "selected";
      x=currcode;
      console.log(x);
    } else if (dropdown.name === "to" && currcode === "INR") {
      newopt.selected = "selected";
      y=currcode;
      console.log(y);
    }
  }
};
selectlist(dropdown1);
selectlist(dropdown2);

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };


dropdown1.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    x=evt.target;
    x=x.value;
    console.log(x);
  });
dropdown2.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    y=evt.target;
    y=y.value;
    console.log(y);
  });

let URL,p,k,v;
const get = async () => {
  p = await fetch(URL);
  k = await p.json();
  v = k.rates;
  let cal = amount.value * v[y];
  result.innerText = `${amount.value} ${x}  =  ${cal} ${y}`;
};



btn.addEventListener('click', ()=>{
  URL = `https://api.frankfurter.dev/v1/latest?base=${x}&symbols=${y}`;
  get(); 
})