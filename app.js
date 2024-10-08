// START PAGE

const showRegistrationPage = () => {
  document.getElementById("start-page").classList.add("hidden");
  document.getElementById("registration-page").classList.remove("hidden");
  helpMessage()
};

const redirectToMainPage = () => {
  location.href = "https://www.regionalaustraliabank.com.au";
};

// REGISTRATION PAGE

const registrationForm = document.getElementById("registration-form");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^(04\d{8}|05\d{8}|02\d{8}|03\d{8}|07\d{8}|08\d{8})$/;

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;

  // saves data into object
  const userData = {
    name: name,
    email: email,
    phone: phone,
    dob: dob,
  };

  //email and phone number validation
  const emailValid = emailRegex.test(email);
  const phoneValid = phoneRegex.test(phone);

  document
    .getElementById("email-error-message")
    .classList.toggle("hidden", emailValid);
  document
    .getElementById("phone-error-message")
    .classList.toggle("hidden", phoneValid);

  if (!emailValid || !phoneValid) {
    return;
  }

  if (calculateAge(dob) < 18) {
    location.href =
      "https://www.regionalaustraliabank.com.au/apply-online/open-rab?p=s3";
  } else {
    showThankYouPage();
  }

  registrationForm.reset();
});

//checks if user is 18 or over
const calculateAge = (dob) => {
  const age = (new Date() - new Date(dob).getTime()) / 3.15576e10;

  return age;
};

const showThankYouPage = () => {
  document.getElementById("thank-you-page").classList.remove("hidden");
  document.getElementById("registration-page").classList.add("hidden");

  generateAccountID();
};

// THANK YOU PAGE

const generateAccountID = () => {
    const chars = 'CDEFGHIJKLMNOPQSTUVWXYZ'; // Excluding R, A, B
    let accountId = '';
    for (let i = 0; i < 9; i++) {
      accountId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('account-id').textContent = accountId;
  }

//help message
const helpMessage = () => {
  setTimeout(() => {
    document.getElementById("help-message").showModal();
  }, 60000);
};
