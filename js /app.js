'usestrict';
let formEl = document.getElementById('myForm');
let tableEl = document.getElementById('myTable');


let foods = [];
function Food(cutomerName, foodType) {
    this.cutomerName = cutomerName;
    this.foodType = foodType;
    this.min=2;
    this.max=10;
    this.price = getRandomInt(this.min, this.max);
    foods.push(this);
    setitem();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function setitem(){
    let data = JSON.stringify(foods);
    localStorage.setItem('addfood', data);

}

function getitem(){
let stringobj= localStorage.getItem('addfood');
let normalobj=JSON.parse(stringobj);
  
if (normalobj!==null){

    foods=normalobj;
    createTable();
}

}

formEl.addEventListener('submit', handleSub);
function handleSub(event) {
    event.preventDefualt();

    let cutomerName = event.target.cutomerName.value;
    let foodType = event.target.foodType.value;

    new Food = (cutomerName, foodType);
    createTable ();

}
function createTable (){
    tableEl.textContent="";
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEL=document.createElement('th');
    trEl.appendChild(thEL);
    thEL.textContent="orderImage";

    let thEL1=document.createElement('th');
    trEl.appendChild(thEL1);
    thEL1.textContent="orderDeatails";

for (let index = 0; index < foods.length; index++) {
    let trEl1=document.createElement('tr');
    tableEl.appendChild(trEl1);
     
    for (let i = 0; i < 2; i++) {
      let tdEl=document.createElement('td');
      trEl1.appendChild(tdEl);

      if(i==0){
let img= document.createElement('img');
tdEl.appendChild(img);
img.setAttribute('src', foodType);
      }
else if(i==1){
let pEl=document.createElement('p');
tdEl.appendChild(pEl);
tdEl.textContent= `customername ${foods[index].cutomerName};`

let pEl1=document.createElement('p');
    tdEl.appendChild(pEl1);
    tdEl.textContent= `foodtype ${foods[index].foodType};`

    let pEl2=document.createElement('p');
    tdEl.appendChild(pEl2);
    tdEl.textContent= `price ${foods[index].price};`
}

      }
        
    }

    
}

getitem();



