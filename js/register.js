const form = document.querySelector("form");
const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const languageOutput = document.querySelector("#language_output");
const lektionerOutput = document.querySelector("#lektioner_output");
const situationOutput = document.querySelector("#situation_output");
const doneOutput = document.querySelector("#done_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const language = formData.get("language");
  const lektioner = formData.get("lektioner");
  const situation = formData.get("situation");
  const done = formData.get("accept_terms");
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  languageOutput.textContent = language;
  lektionerOutput.textContent = lektioner;
  situationOutput.textContent = situation;
  doneOutput.textContent = done;
  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
