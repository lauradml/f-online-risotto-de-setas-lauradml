'use strict';

const url ='https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json';
let result;
const list = document.querySelector('.ingredients-list');

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
    const titel= document.querySelector('.titel');
        titel.innerHTML=result.recipe.name;

    for (var i = 0; i < product.length; i++) {
      var listItem = document.createElement('li');
      listItem.classList.add('items-li');
      const check = document.createElement('input');
      const quantityNumber = document.createElement ('input');
      const article = document.createElement('h2');
      const brand = document.createElement('p');
      const quantity = document.createElement('p');
      const price = document.createElement('p');

      article.innerHTML = product[i].product;
      brand.innerHTML = product[i].brand;
      quantity.innerHTML =  product[i].quantity;
      price.innerHTML = product[i].price + ' € '

      list.appendChild(listItem);
      listItem.appendChild(article);
      listItem.appendChild(brand);
      listItem.appendChild(quantity);
      listItem.appendChild(price);
    }
}
