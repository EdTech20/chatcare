function toggleMenu() {
    var navList = document.getElementById('nav-list');
    if (navList.style.display === "flex") {
        navList.style.opacity = "0";
        setTimeout(function() {
            navList.style.display = "none";
        }, 300);
    } else {
        navList.style.display = "flex";
        setTimeout(function() {
            navList.style.opacity = "1";
        }, 10);
    }
}
