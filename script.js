document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    let dropdownBtn = document.getElementById("dropdownBtn");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    function showDropdown() {
        dropdownMenu.style.display = "block";
    } // DORPDOWN BYE BYE IDIOT

    function hideDropdown() {
        setTimeout(() => {
            if (!dropdown.matches(":hover") && !dropdownMenu.matches(":hover")) {
                dropdownMenu.style.display = "none";
            }
        }, 200);
    } // BYE BYE MORON

    dropdownBtn.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });

    dropdown.addEventListener("mouseenter", showDropdown);
    dropdown.addEventListener("mouseleave", hideDropdown);
    dropdownMenu.addEventListener("mouseleave", hideDropdown);

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});