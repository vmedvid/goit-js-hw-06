const loginFormEl = document.querySelector(".login-form");

function handleLoginFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const formEntries = {
    email: email.value.trim(),
    password: password.value,
  };

  if (email.value.trim() === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(formEntries);
  event.currentTarget.reset();
}

loginFormEl.addEventListener("submit", handleLoginFormSubmit);
