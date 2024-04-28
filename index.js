
const form = document.querySelector('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const phoneNum = document.getElementById('phone-num');
const emailId = document.getElementById('email-id');
const message = document.getElementById('message');

function sendEmail() {

  const bodyMessage = `There is a new appointment inquiry for: <br>
                       First Name: ${firstName.value} <br>
                       Last Name: ${lastName.value} <br>
                       Phone Number: ${phoneNum.value} <br>
                       Email: ${emailId.value} <br>
                       Message: ${message.value}`;

  Email.send({
    SecureToken : 'f48f5bb8-ac72-4051-a5ff-1eb589ae39b4',
    To : 'lgallagherwellness@gmail.com',
    From : "lgallagherwellness@gmail.com",
    Subject : "New Appointment Inquiry",
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK") {
      Swal.fire({
        title: "Success",
        text: "The message has been sent.",
        icon: "success"
      });
    }
  }
);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === '' || lastName.value === '' || phoneNum.value === '' || emailId.value === '' || message.value === '') {
    Swal.fire({
      title: "Error",
      text: "Please fill out all fields.",
      icon: "error"
    });
  } else {
    sendEmail();
    form.reset();
  }
});