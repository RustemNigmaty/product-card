// 1. Создаем файл, все как прошлых дз.
// 2. Почитать про теги: label, form, input (источники прикреплены в конце ДЗ)
// 3. Сверстать данный footer, используя семантические теги (footer, nav и т.д.)
// 4. К Форме, которая прикреплена в футере - добавить логику:
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribeForm');
  const emailInput = document.getElementById('subscribeEmail');

// Кнопка "Подписаться" и есть "отправка формы"
  form.addEventListener('submit', (event) => {
    event.preventDefault();// Отменяем перезагрузку страницы при отправке формы
    const emailValue = emailInput.value.trim();// Получаем значение из инпута и убираем лишние пробелы по краям

// если email не заполнен - форма не отправляется.
    if (!emailValue) {
      alert('Пожалуйста, заполните поле Email.');
      emailInput.focus();
      return;
    }

// email должен соответствовать стандартам (добавить валидацию),
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
      alert('Введенный Email не соответствует стандарту (например, user@example.com).');
      emailInput.focus();
      return;
    }
// Кнопка "Подписаться" и есть "отправка формы", при нажатии на которую мы будем выводить консоль лог в виде объекта: { email: 'введенная почта' }
    const result = {
      email: emailValue
    };
    console.log(result);
    form.reset();
  });
});

// 5. Регистрация через модалку
// Также создайте внешнюю переменную user 
let user = null;

const openBtn = document.getElementById('open-register-btn');
const closeBtn = document.getElementById('close-modal-btn');
const overlay = document.getElementById('modal-overlay');
const form = document.getElementById('register-form');

function openModal() {
  overlay.classList.add('modal-showed');
}

function closeModal() {
  overlay.classList.remove('modal-showed');
  form.reset();
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closeModal();
  }
});

//Все поля должны иметь валидацию. 
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const firstName = document.getElementById('reg-firstname').value.trim();
  const lastName = document.getElementById('reg-lastname').value.trim();
  const dob = document.getElementById('reg-dob').value;
  const login = document.getElementById('reg-login').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('reg-confirm-password').value;

//Проверка длины пароля (минимум 10 символов)
if (password.length < 10) {
    alert("Регистрация отклонена: Пароль слишком короткий! Минимальная длина — 10 символов.");
    return;
  }

  //Если пользователь ввел два разных пароля 
  if (password !== confirmPassword) {
    alert("Регистрация отклонена: Пароли не совпадают!");
    return;
  }
// если форма невалидна (используем метод checkValidity())
// - мы должны предупредить его о том, что регистрация отклонена.
  if (!form.checkValidity()) {
    alert("Регистрация отклонена: Пожалуйста, корректно заполните все поля.");
    return;
  }
// Дополнительно мы должны добавить к этому объекту свойство createdOn 
// и указать туда время создания (используем сущность new Date()).
//Также создайте внешнюю переменную user и присвойте ей этот объект. 
  user = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dob,
    login: login,
    password: password,
    createdOn: new Date()
  };

  console.log("Успешная регистрация!", user);// Если регистрация успешна - выводим значения формы в лог, как в задании №4. 

  closeModal();//После успешной регистрации - модалка должна закрыться.
});
