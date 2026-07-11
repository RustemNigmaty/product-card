// Создаем коробочку firstCard и кладем туда первую найденную карточку
const firstCard = document.querySelector('.product-card');

// 1. Находим кнопку по классу btn-color
const btnColor = document.querySelector('.btn-color');

// 2. Вешаем на кнопку слушатель события клик
btnColor.addEventListener('click', function() {
  // 3. Внутри функции обработчика события меняем цвет первой карточки на красный
  fistCard.style.backgroundColor = 'red';
  console.log('Кнопка была нажата, цвет первой карточки изменен на красный');
});

// 1. Находим все карточки по классу product-card
const allCards = document.querySelectorAll('.product-card');

// 2. Находим кнопку по классу btn-color-all
const btnColorAll = document.querySelector('.btn-color-all');

// 3. Вешаем на кнопку слушатель события клик
btnColorAll.addEventListener('click', function() {
  // 4. Внутри функции обработчика события меняем цвет всех карточек на синий
  allCards.forEach(function(card) {
    card.style.backgroundColor = 'lightblue';
  });
  console.log('Кнопка была нажата, цвет всех карточек изменен на светло-голубой');
});

// 1. Пишем функцию для вопроса и открытия Google в новой вкладке
function askAndOpenGoogle() {
  // Задаем вопрос пользователю
  const userAnswer = confirm('Вы хотите открыть Google в новой вкладке?');
  // Если пользователь нажал "ОК", открываем Google в новой вкладке
  if (userAnswer === true) {
      window.open('https://www.google.com', '_blank');
  } else {
      console.log('Пользователь отказался открывать Google.');
  }
}

// 2. Находим кнопку по классу btn-google
const btnGoogle = document.querySelector('.btn-google');

// 3. Вешаем на кнопку слушатель события клик
btnGoogle.addEventListener('click', askAndOpenGoogle);

// 1. Пишем универсальную функцию
function printAndAlert(text) {
  console.log(text); // Выводим текст в консоль
  alert(text); // Показываем текст в окне браузера
}

// 2. Находим кнопку и вешем на нее слушатель события клик
const messageBtn = document.querySelector('.btn-message');
messageBtn.addEventListener('click', function() {
  printAndAlert('Привет! Это универсальная функция, которая выводит текст в консоль и показывает его в окне браузера.');
});

// 1. Находим наш заголовок по классу title
const pageTitle = document.querySelector('.title');

// 2. Вешаем на заголовок слушатель события наведения мыши
pageTitle.addEventListener('mouseover', function() {
  // 3. Читаем текст заголовка и выводим его в консоль
  console.log(pageTitle.textContent);
});

// 1. Находим кнопку по классу btn-toggle
const btnToggle = document.querySelector('.btn-toggle');

// 2. Вешаем на кнопку слушатель события клик
btnToggle.addEventListener('click', function() {
  // 3. Переключаем класс active-color на кнопке
  btnToggle.classList.toggle('active-color');
});