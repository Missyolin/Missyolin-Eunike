let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let j;
  let slides1 = document.getElementsByClassName("mySlides1");
  if (n > slides1.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides1.length}
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";  
  }
  slides1[slideIndex1-1].style.display = "block";  
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let k;
  let slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (k = 0; k < slides2.length; k++) {
    slides2[k].style.display = "none";  
  }
  slides2[slideIndex2-1].style.display = "block";  
}

function validateForm() {
    let x = document.forms["myform"]["name"].value;
    let y = document.forms["myform"]["email"].value;
    let z = document.forms["myform"]["message"].value;
    if (x == "" || y=="" || z=="") {
      alert("All fields must be filled out!");
      return false;
    }
  }
