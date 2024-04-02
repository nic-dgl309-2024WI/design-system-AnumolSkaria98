function toggleNav() {
    var topNavLinks = document.querySelector(".c-topnav__links");
    var hamburger = document.querySelector(".c-hamburger");
    var cancel = document.querySelector(".c-cancel");
  
    if (topNavLinks.style.display === "" || topNavLinks.style.display === "none") {
      topNavLinks.style.display = "flex";
      hamburger.style.display = "none"; // Hide hamburger icon
      cancel.style.display = "block"; // Show cancel icon
    } else {
      topNavLinks.style.display = "none";
      hamburger.style.display = "block"; // Show hamburger icon
      cancel.style.display = "none"; // Hide cancel icon
    }
  }



  document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            questions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                }
            });
            question.classList.toggle('active');
        });
    });
});

// Testimonial
let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("testimonial-slide");
        const pagination = document.querySelector(".pagination");
        let dots = '';
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots += `<button class="dot" onclick="currentSlide(${i+1})"></button>`;
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        pagination.innerHTML = dots;
        pagination.getElementsByTagName('button')[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 4000); // Change slide every 4 seconds
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides();
    }


