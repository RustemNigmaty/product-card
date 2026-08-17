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