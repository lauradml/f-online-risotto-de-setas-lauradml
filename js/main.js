'use strict';

const url ='https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json';
let result;
const list = document.querySelector('.ingredients-list');
let rowList= new Array();
const titel= document.querySelector('.titel');
const total= document.querySelector('.total');
const shippingCost= document.querySelector('.shipping-cost');

fetch(url)
    .then(res => res.json())
    .then(data => {
        result= data;
      console.log('data', result);
      listProducts();
});

function listProducts(){
    const product= result.recipe.ingredients;
    console.log(product);

    titel.innerHTML=result.recipe.name;

    for (var i = 0; i < product.length; i++) {
      rowList[i] = document.createElement('li');
      rowList[i] .classList.add('items-li');
      const check = document.createElement('input');
      check.classList.add('select-item');
      const number = document.createElement ('input');
      const article = document.createElement('h2');
      const brand = document.createElement('p');
      const quantity = document.createElement('p');
      const price = document.createElement('p');
      price.classList.add('price-item');

      check.type='checkbox';
      check.name = 'products';
      number.type= 'number';
      article.innerHTML = product[i].product;
      brand.innerHTML = product[i].brand;
      quantity.innerHTML =  product[i].quantity;
      price.innerHTML = product[i].price + ' € '

      list.appendChild(rowList[i] );
      rowList[i].appendChild(check);
      rowList[i].appendChild(number);
      rowList[i].appendChild(article);
      rowList[i].appendChild(brand);
      rowList[i].appendChild(quantity);
      rowList[i].appendChild(price);

      shippingCost.innerHTML="Gastos de evio: " + result.recipe['shipping-cost'] + ' €'

      check.addEventListener('click', selectOne);

    }
}

function selectOne(event){
console.log('kk');
console.log(rowList);
// for (let i=0; i<rowList.length;i++)
// total.innerHTML= rowList[i].price;
}


function selectAll(){
  const elements= document.form.elements;
    for (let i=0; i<elements.length;i++)
       if(elements[i].type == "checkbox")
          elements[i].checked=1
 }

 function deselectAll(){
   const elements= document.form.elements;
    for (let i=0; i<elements.length;i++) {
       if(elements[i].type == "checkbox")
          elements[i].checked=0;
    }
 }

 const select = document.querySelector('.select-all');
 const deselect = document.querySelector('.deselect-all');


 select.addEventListener('click', selectAll);
 deselect.addEventListener('click', deselectAll);
