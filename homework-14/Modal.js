export class Modal {
  shouldCloseOnOverlay;
  
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
    this.#initClose();
  }

  #handleClose = () => this.close();

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.#handleClose);
    }
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.overlay.removeEventListener("click", this.#handleClose);
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      this.open();
    });
  }

  #initClose() {
    const closeButton = this.modal.querySelector(".modal-close-button");

    closeButton.addEventListener("click", this.#handleClose);
  }
}
