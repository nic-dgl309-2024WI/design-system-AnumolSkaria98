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
