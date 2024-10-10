# user-registration-page
## Live Version
Link: https://samuel-santos91.github.io/user-registration-page/
## Preview
<img width="500" alt="Screenshot 2024-10-09 at 14 13 51" src="https://github.com/user-attachments/assets/ec645e41-7510-4e6f-8de2-9587f13d75b8">
<img width="500" alt="Screenshot 2024-10-09 at 14 17 20" src="https://github.com/user-attachments/assets/09dcc9aa-0331-48ae-8f52-887a269d5bde">

## Requirements
### MVP
* User registration form with input validation.
* Age check to ensure only users above 18 can proceed.
* Displays a thank you page upon successful registration.
* Help message dialog box that appears after 60 seconds of inactivity.

### Tech Stack
* HTML5
* CSS3
* JavaScript (ES6+)

## Features
* **Dynamic Form Fields and Validation:** The application supports dynamic addition of form fields and validation rules, making it easily configurable and scalable.
* **Responsive Design**: The application is mobile-friendly with media queries ensuring adaptability to screen sizes below 768px.
* **Form Validation**: Email and phone input fields are validated using regular expressions.
<img width="500" alt="Screenshot 2024-10-09 at 14 14 44" src="https://github.com/user-attachments/assets/1ca1581a-659b-4836-9004-534bf09b5dd8"><br>

* **Age Verification**: Users below 18 are redirected to another page.
* **Help Dialog**: A help message appears after 60 seconds of user inactivity to guide them to support resources.
<img width="500" alt="Screenshot 2024-10-09 at 14 15 06" src="https://github.com/user-attachments/assets/e3975f35-a2b5-45e6-947c-e56018ae8120"><br>

* **Dynamic Account ID Generation**: An account ID is generated for each new user after successful registration.
* **Interactive Thank You Page**: Displays user-specific account information after submission.
<img width="500" alt="Screenshot 2024-10-09 at 14 15 18" src="https://github.com/user-attachments/assets/ebe774c5-9118-4aa4-ae70-dc4a8dcdf80f"><br>

* **Debugging Information**: On the last page, there is a button that displays the data saved from the registration form (name, email, phone, date of birth) in JSON format. This feature helps with debugging and verifying the input values captured during registration.

## Cloning and Running the Application in local machine
1. **Clone repository:**
```bash
git clone https://github.com/username/user-registration-page.git
```
2. **Navigate to the project directory:**
```bash
cd user-registration-page
```
3. **Open the folder in your preferred IDE.**
4. **Run a local server in the IDE to serve the project.**

## Approach
* The project is built using modern HTML5, CSS3, and vanilla JavaScript. 
* The structure is simple and clear, separating the start page, registration page, and thank you page into distinct sections that are     dynamically shown or hidden based on user interaction. 
* The help dialog box provides a layer of assistance for users after a period of inactivity. Media queries ensure the design is responsive.
* The form field generation and validation were implemented dynamically, enabling easy addition or removal of fields and validation rules.
  
## Challenges
* **Dynamic Input Generation:** Successfully integrating dynamic input creation ensuring flexible configuration.
* **Form Validation:** Creating regular expressions that match various email and phone formats accurately.
* **User Experience:** Balancing the interactive elements and ensuring the registration process remains smooth.


 
 
