const loginFormEl = document.querySelector(".login-form");

function handleSubmitAndValidation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const formEntries = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(formEntries);
    event.currentTarget.reset();
  }
}

loginFormEl.addEventListener("submit", handleSubmitAndValidation);
