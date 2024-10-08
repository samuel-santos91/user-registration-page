// START PAGE

const showRegistrationPage = () => {
  document.getElementById("start-page").classList.add("hidden");
  document.getElementById("registration-page").classList.remove("hidden");
};

const redirectToMainPage = () => {
  location.href = "https://www.regionalaustraliabank.com.au";
};

// REGISTRATION PAGE

const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;

  const userData = {
    name: name,
    email: email,
    phone: phone,
    dob: dob,
  };

  registrationForm.reset();

  console.log(userData);
});
