/* 1. Как и в прошлых задания - создаем отдельный файл для homework-10 
и подключаем его в HTML с атрибутом type = module (что бы работали импорты)*/

import { products } from "./products.js";

/* 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек. (Посмотрите сразу задание 5)*/

const productCardTemplate = document.getElementById("product-card-template");

const productList = document.querySelector(".product-list");

/*4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание*/

const productDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.text });
  return acc;
}, []);

console.log(productDescriptions);

/* 5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) 
"Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. 
Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, 
одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
P.S. - визуально, карточки у вас не должны поменяться вообще.*/

function getCardCount() {
  const count = Number(prompt("Сколько карточек отобразить? От 1 до 5", 1,),);
  if (Number.isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Пожалуйста, введите корректное число от 1 до 5!");
    return getCardCount();
  }
  return count;
}

const cardCount = getCardCount()

products.slice(0, cardCount).forEach((product) => {
  const productClone = productCardTemplate.content.cloneNode(true);
  productClone.querySelector(".product-card__image").src = product.src;
  productClone.querySelector(".product-card__image").alt = product.alt;
  productClone.querySelector(".product-card__description").textContent = product.description;
  productClone.querySelector(".product-card__name").textContent = product.name;
  productClone.querySelector(".product-card__text").textContent = product.text;
  productClone.querySelector(".product-card__composition1").textContent = product.composition1;
  productClone.querySelector(".product-card__composition2").textContent = product.composition2;
  productClone.querySelector(".product-card__composition3").textContent = product.composition3;
  productClone.querySelector(".product-card__price").textContent = product.price;
  productList.append(productClone);
  console.log(productList);
});

//1. Кнопка перекрашивания первой карточки
const firstCard = document.querySelector(".product-card");
const btnColor = document.querySelector(".btn-color");
btnColor.addEventListener("click", function () {
  firstCard.style.backgroundColor = "red";
  console.log("Кнопка была нажата, цвет первой карточки изменен на красный");
});

// 2. Кнопка перекрашивания всех карточек
const allCards = document.querySelectorAll(".product-card");
const btnColorAll = document.querySelector(".btn-color-all");
btnColorAll.addEventListener("click", function () {
  allCards.forEach(function (card) {
    card.style.backgroundColor = "lightblue";
  });
  console.log(
    "Кнопка была нажата, цвет всех карточек изменен на светло-голубой",
  );
});
