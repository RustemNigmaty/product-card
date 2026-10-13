/*Используя данный класс (class Form)- переписать логику задания №11, связанной с формами. 
Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка.*/

import Form from './Form.js';
import Modal from './Modal.js';

let user = null;

document.addEventListener('DOMContentLoaded', () => {
  const subscribeForm = new Form('subscribeForm');
  const subscribeEmailInput = document.getElementById('subscribeEmail');

  subscribeForm.formElement.addEventListener('submit', (event) => {
    event.preventDefault();// Отменяем перезагрузку страницы при отправке формы
    const values = subscribeForm.getValues();

    if (!values.subscribeEmail) {
      alert('Пожалуйста, заполните поле Email.');
      subscribeEmailInput.focus();
      return;
    }

    if (subscribeEmailInput.validity.typeMismatch) {
      alert('Введенный Email не соответствует стандарту (например, user@example.com).');
      subscribeEmailInput.focus();
      return;
    }

    console.log({email: values.subscribeEmail});
    subscribeForm.reset();
  });
  const registerModal = new Modal('modal-overlay');
  const registerForm = new Form('register-form');

  const openBtn = document.getElementById('open-register-btn');
  openBtn.addEventListener('click', () => registerModal.open());
  
  const closeBtn = document.getElementById('close-modal-btn');
  closeBtn.addEventListener('click', () => {
    registerModal.close();
    registerForm.reset();
  });
  
  const overlay = document.getElementById('modal-overlay');
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      registerModal.close();
      registerForm.reset();
    }
  });

  document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!registerForm.isValid()) {
      return;
    }
    
    const formProps = registerForm.getValues();
    user = {
      ...formProps,
      createdOn: new Date()
    };

  console.log("Успешная регистрация!", user);// Если регистрация успешна - выводим значения формы в лог, как в задании №4. 

  registerModal.close();
  registerForm.reset();
  });
});