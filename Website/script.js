// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Alert first, then scroll to Menu
    const menuButtons = document.querySelectorAll('.btn[href="#menu"]');
    menuButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        alert("Taking you to our delicious menu!");
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
          menuSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  