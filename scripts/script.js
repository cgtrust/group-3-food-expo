const btnNav = document.querySelector('.nav-button');
const menu = document.querySelector('.bottom-nav');

function openNav() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menu.style.display = "none";
      } else {
        menu.classList.add("showMenu");
        menu.style.display = "flex";
      }
}

btnNav.addEventListener('click', openNav);
