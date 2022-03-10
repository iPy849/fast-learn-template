var loginShowPopup, popupContainer, closePopupContainer, loginForm;
var loginEmail = "example@example.example",
  loginPassword = "example";

document.addEventListener("DOMContentLoaded", () => {
  loginShowPopup = document.querySelector("#login-popup");
  popupContainer = document.querySelector("#popup-menu");
  closePopupContainer = document.querySelector("#close-popup-menu");
  loginForm = document.querySelector("#popup-menu > form");

  loginShowPopup.addEventListener(
    "click",
    () =>
      (popupContainer.style.display =
        popupContainer.style.display === "block" ? "none" : "block")
  );

  closePopupContainer.addEventListener(
    "click",
    () => (popupContainer.style.display = "none")
  );

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailField = loginForm.querySelector('input[type="email"]');
    passwordField = loginForm.querySelector('input[type="password"]');
    errorMessage = undefined;

    if (emailField.value !== loginEmail)
      errorMessage = emailField.getAttribute("aria-errormessage");
    else if (passwordField.value !== loginPassword)
      errorMessage = passwordField.getAttribute("aria-errormessage");

    if (errorMessage) {
      errorMessageElement = document.querySelector("#popup-menu > p");
      errorMessageElement.innerHTML = errorMessage;
      errorMessageElement.style.display = "block";
      return;
    } else {
      errorMessageElement.style.display = "none";
      alert("Has completado el Ingreso a Learn Fast");
    }
  });
});
