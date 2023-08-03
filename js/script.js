let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}


function validateForm() {
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");

  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return false;
  }

  if (!isValidEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }
  alert("Data berhasil dikirim");
  return true;
}

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
