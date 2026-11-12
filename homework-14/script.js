import { Modal } from "./Modal.js";

const registrationModal = new Modal(
  "registration-modal",
  "registration-button",
  true,
);
const authModal = new Modal("auth-modal", "auth-button", true);

// const button = document.getElementById("registration-button");
// const click = () => console.log("click");
// button.addEventListener('click', click);

// setTimeout(() => {button.removeEventListener("click", click)}, 10000);