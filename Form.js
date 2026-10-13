/*5. Создать файл Form.js и реализовать класс для формы под названием Form. 
Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
...
Используя данный класс - переписать логику задания №11, связанной с формами. 
Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка.*/
export default class Form {
  constructor(formId) {
    this.id = formId;
    this.formElement = document.getElementById(formId);
  }
//I. Для получения всех значений формы.
  getValues() {
    const formData = new FormData(this.formElement);
    const formProps = Object.fromEntries(formData.entries());

    for (let key in formProps) {
      if (typeof formProps[key] === "string") {
        formProps[key] = formProps[key].trim();
      }
    }
    return formProps;
  }
//II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
  isValid() {
    if (!this.formElement.checkValidity()) {
      alert("Регистрация отклонена: Пожалуйста, корректно заполните все поля.");
      return false;
    }
    
    const values = this.getValues();
    
    const emailInput = this.formElement.querySelector("#reg-email");
    if (emailInput && emailInput.validity.typeMismatch) {
      alert("Регистрация отклонена: Введен некорректный формат Email.");
      return false;
    }
    if (values.password.length < 10) {
    alert("Регистрация отклонена: Пароль слишком короткий! Минимальная длина — 10 символов.");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      alert("Регистрация отклонена: Пароли не совпадают!");
      return false;
    }

    return true;
  }
//III. Для сброса значений формы.  
  reset() {
    this.formElement.reset();
  }
}
