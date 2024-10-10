let applicant = {}; //initialising applicant data object
let helpMessageTimeout;
const currentDate = new Date().toISOString().split("T")[0];

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

//form configuration (add or remove any field)
const formConfig = {
  name: {
    label: "Name",
    type: "text",
    required: true,
  },
  email: {
    label: "Email",
    type: "email",
    required: true,
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    errorMessage: "Email address not valid.",
  },
  phone: {
    label: "Phone",
    type: "tel",
    placeholder: "0412 345 678",
    maxlength: "10",
    required: true,
    regex: /^(04\d{8}|05\d{8}|02\d{8}|03\d{8}|07\d{8}|08\d{8})$/,
    errorMessage: "Phone number not valid.",
  },
  dob: {
    label: "Date of Birth",
    type: "date",
    max: currentDate,
    required: true,
  },
};

//function to generate form fields
const generateFormFields = (formConfig, formElement) => {
  const button = formElement.querySelector('button[type="submit"]');

  Object.keys(formConfig).forEach((key) => {
    const field = formConfig[key];

    const label = document.createElement("label");
    label.setAttribute("for", key);
    label.textContent = field.label;

    const input = document.createElement("input");
    input.type = field.type;
    input.id = key;
    input.required = field.required;

    if (field.placeholder) {
      input.placeholder = field.placeholder;
    }
    if (field.maxlength) {
      input.maxLength = field.maxlength;
    }
    if (field.max) {
      input.max = field.max;
    }

    formElement.insertBefore(label, button);
    formElement.insertBefore(input, button);

    if (field.errorMessage) {
      const errorMessage = document.createElement("p");
      errorMessage.id = `${key}-error-message`;
      errorMessage.classList.add("input-error-message", "hidden");
      errorMessage.textContent = field.errorMessage;
      formElement.insertBefore(errorMessage, button);
    }
  });
};

//initialise form generation
const registrationForm = document.getElementById("registration-form");
generateFormFields(formConfig, registrationForm);


//form submission
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //saves data into object
  Object.keys(formConfig).forEach((key) => {
    const input = document.getElementById(key);
    applicant[key] = input.value;
  });

  //input validation
  let isInputValid = true;

  Object.keys(formConfig).forEach((key) => {
    const field = formConfig[key];
    let validation = true;

    if (field.regex) {
      const input = document.getElementById(key);
      validation = field.regex.test(input.value);
    }

    const errorMessageElement = document.getElementById(`${key}-error-message`);
    if (errorMessageElement) {
      errorMessageElement.classList.toggle("hidden", validation);
    }

    if (!validation) {
      isInputValid = false;
    }
  });

  //check if all fields are valid before proceeding
  if (!isInputValid) {
    return;
  }

  //checks if user is 18 or over
  if (calculateAge(applicant.dob) < 18) {
    location.href =
      "https://www.regionalaustraliabank.com.au/apply-online/open-rab?p=s3";
  } else {
    showThankYouPage();
  }

  registrationForm.reset();
  clearTimeout(helpMessageTimeout);
});

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
