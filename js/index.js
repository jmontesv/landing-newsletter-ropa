const formNewsletter = document.getElementById("form-newsletter");
const messageError = document.getElementById("message-error");

formNewsletter.addEventListener("submit", (event) => {
  const email = event.target.email;
  new RegExp(/\S+@\S+\.\S+/).test(email.value)
    ? (email.value = "")
    : showErrorMessage();
  event.preventDefault();
});

function showErrorMessage() {
  messageError.classList.remove("not-show");
  messageError.classList.add("show");
}
