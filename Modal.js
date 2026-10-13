/* 4.Создать файл Modal.js и в нем создать класс для модального окна под названием Modal. 
Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:*/
export default class Modal {
  constructor(modalId) {
    this.id = modalId;
    this.modalElement = document.getElementById(modalId);
    this.closeButton = this.modalElement.querySelector('.modal__close');
    this.setCloseButtonListener();
  }
  
  open() {
    this.modalElement.classList.add('modal-showed');
  }

  close() {
    this.modalElement.classList.remove('modal-showed');
  }
  
  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }
  
  setCloseButtonListener() {
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}