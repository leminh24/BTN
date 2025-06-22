document.addEventListener("DOMContentLoaded", function () {
    const navItem1 = document.querySelector(".nav-item1");
    const navItem2 = document.querySelector(".nav-item2");
    const navItem3 = document.querySelector(".nav-item3");
    const contactDropdown = document.querySelector(".header__contact");

    // Toggle nav-item1
    navItem1.addEventListener("click", function (e) {
        e.stopPropagation();
        navItem1.classList.toggle("open");
        navItem2.classList.remove("open");
        navItem3.classList.remove("open");
        contactDropdown.classList.remove("open");
    });

    // Toggle nav-item2
    navItem2.addEventListener("click", function (e) {
        e.stopPropagation();
        navItem2.classList.toggle("open");
        navItem1.classList.remove("open");
        navItem3.classList.remove("open");
        contactDropdown.classList.remove("open");
    });
    // Toggle nav-item3
    navItem3.addEventListener("click", function (e) {
        e.stopPropagation();
        navItem3.classList.toggle("open");
        navItem2.classList.remove("open");
        navItem1.classList.remove("open");
        contactDropdown.classList.remove("open");
    });

    // Click outside -> close all
    document.addEventListener("click", function () {
        navItem1.classList.remove("open");
        navItem2.classList.remove("open");
        navItem3.classList.remove("open");
        contactDropdown.classList.remove("open");
    });
});
