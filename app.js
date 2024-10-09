let applicant = {}; //initialising applicant data object
let helpMessageTimeout;

// START PAGE

const registrationPage = document.getElementById("registration-page");

const showRegistrationPage = () => {
  const startPage = document.getElementById("start-page");

  startPage.classList.add("hidden");
  registrationPage.classList.remove("hidden");
  registrationPage.classList.add("registration-page-container");

  helpMessage();
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
  applicant = {
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
  clearTimeout(helpMessageTimeout);
});

//checks if user is 18 or over
const calculateAge = (dob) => {
  const age = (new Date() - new Date(dob).getTime()) / 3.15576e10;

  return age;
};

const showThankYouPage = () => {
  const thankYouPage = document.getElementById("thank-you-page");

  thankYouPage.classList.remove("hidden");
  registrationPage.classList.remove("registration-page-container");
  registrationPage.classList.add("hidden");

  generateAccountID();
};

// THANK YOU PAGE

const generateAccountID = () => {
  const chars = "CDEFGHIJKLMNOPQSTUVWXYZ"; // Excluding R, A, B
  let accountId = "";
  for (let i = 0; i < 9; i++) {
    accountId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("account-id").textContent = accountId;
};

const applicantData = document.getElementById("applicant-data");

const showApplicantData = () => {
  applicantData.textContent = JSON.stringify(applicant, null, 2);
  applicantData.classList.toggle("hidden");
};

//help message
const dialogBox = document.getElementById("help-message");

const helpMessage = () => {
  helpMessageTimeout = setTimeout(() => {
    dialogBox.showModal();
  }, 60000);
};

const closeHelpMessage = () => {
  dialogBox.close();
};
