import emailjs from "emailjs-com"

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const number=document.getElementById("number").value;
  
    // Use EmailJS to send the form data
    emailjs.init("HCO06ZqUPGOVWrYjD"); // Replace with your User ID
    emailjs
      .send("service_tztn4m5", "template_dixo92s", {
        name: name,
        email: email,
        message: message,
        number:number,
      })
      .then(
        function (response) {
          document.getElementById("successMessage").style.display = "block";
          document.getElementById("errorMessage").style.display = "none";
          document.getElementById("contactForm").reset();
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          document.getElementById("errorMessage").style.display = "block";
          document.getElementById("successMessage").style.display = "none";
          console.log("FAILED...", error);
        }
      );
  });
  