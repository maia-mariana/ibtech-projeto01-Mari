document.addEventListener("DOMContentLoaded", () => {

  const themeToggle =
  document.getElementById("themeToggle");

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

      themeToggle.innerHTML = "🌙";

    } else {

      themeToggle.innerHTML = "💡";

    }

  });



  /* HOVER MAPA */

  const interests =
  document.querySelectorAll('.interest');

  interests.forEach((item) => {

    item.addEventListener('mouseenter', () => {

      item.style.boxShadow =
      '0 0 25px rgba(255,255,255,0.25)';

    });

    item.addEventListener('mouseleave', () => {

      item.style.boxShadow = 'none';

    });

  });

});