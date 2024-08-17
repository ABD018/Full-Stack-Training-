document.addEventListener("DOMContentLoaded", function() {
    const profileMenu = document.getElementById("profileMenu");
    const sidebar = document.getElementById("sidebar");

    window.addEventListener("click", function(e) {
        if (!e.target.matches(".header__right .material-icons")) {
            profileMenu.style.display = "none";
        }
    });

    window.addEventListener("click", function(e) {
        if (!e.target.matches(".header__left .material-icons")) {
            sidebar.style.display = "block";
        }
    });

    document.querySelectorAll(".sidebarOption").forEach(option => {
        option.addEventListener("click", function() {
            document.querySelector(".sidebarOption__active").classList.remove("sidebarOption__active");
            this.classList.add("sidebarOption__active");
        });
    });
});

function toggleProfileMenu() {
    const profileMenu = document.getElementById("profileMenu");
    if (profileMenu.style.display === "block") {
        profileMenu.style.display = "none";
    } else {
        profileMenu.style.display = "block";
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}




