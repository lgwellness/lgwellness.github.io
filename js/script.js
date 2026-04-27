// Initialize EmailJS safely after page loads
document.addEventListener("DOMContentLoaded", function () {

emailjs.init("6TOOsk0NMx6Z_MbyP");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

contactForm.addEventListener("submit", function (event) {

event.preventDefault();

emailjs.sendForm(
"service_b409rl9",
"template_bdp5ywj",
this
)

.then(function () {

alert("Your message has been sent successfully!");

contactForm.reset();

})

.catch(function (error) {

alert("Message failed to send. Please try again.");

console.log("EmailJS Error:", error);

});

});

}

});


// Modal image function (kept from your original file)
function showImage(src) {
document.getElementById("modalImage").src = src;
}