const formNewsletter = document.getElementById("form-newsletter");
const messageError = document.getElementById("message-error");

formNewsletter.addEventListener("submit", (event) => {
  const email = event.target.email;
  new RegExp(/\S+@\S+\.\S+/).test(email.value)
    ? clearForm(email)
    : showErrorMessage();
  event.preventDefault();
});
function clearForm(email) {
  email.value = "";
  messageError.className = "message-error__text--not-show";
  formNewsletter.email.className = "newsletter__field-email";
  formNewsletter
    .querySelector(".newsletter__group")
    .classList.remove("newsletter__group--error");
}
function showErrorMessage() {
  messageError.classList.remove("message-error__text--not-show");
  messageError.classList.add("message-error__text");
  formNewsletter.email.classList.remove("newsletter__field-email");
  formNewsletter.email.classList.add("newsletter__field-email--border-red");
  formNewsletter
    .querySelector(".newsletter__group")
    .classList.add("newsletter__group--error");
}
