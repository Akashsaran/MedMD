document.addEventListener("DOMContentLoaded", function () {
    /*** DROPDOWN MENU FUNCTIONALITY ***/
    let dropdown = document.querySelector(".dropdown");
    let dropdownBtn = document.getElementById("dropdownBtn");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    function showDropdown() {
        dropdownMenu.style.display = "block";
    } 

    function hideDropdown() {
        setTimeout(() => {
            if (!dropdown.matches(":hover") && !dropdownMenu.matches(":hover")) {
                dropdownMenu.style.display = "none";
            }
        }, 200);
    } 

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

    const elements = document.querySelectorAll(".team-info p, .team-info h3, .team-info h4, .team-image, .program-image, .program-info p, .program-info h3, .program-info h4, .program-info ul");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => {
        el.classList.add(el.classList.contains("team-image") ? "fade-in-small" : "fade-in");
        observer.observe(el);
    });

    sortPrograms();
    document.getElementById("program-search").addEventListener("input", function () {
        let searchValue = this.value.toLowerCase();
        let programs = document.querySelectorAll(".program-box");
        
        programs.forEach(program => {
            let title = program.querySelector(".program-info h3").textContent.toLowerCase();
            
            if (title.includes(searchValue)) {
                program.style.display = "flex"; // Show matching programs
            } else {
                program.style.display = "none"; // Hide non-matching programs
            }
        });
    });

    function sortPrograms() {
        const container = document.querySelector(".program-container");
        const programs = Array.from(document.querySelectorAll(".program-box"));
        
        programs.sort((a, b) => {
            const titleA = a.querySelector(".program-info h3").textContent.toLowerCase();
            const titleB = b.querySelector(".program-info h3").textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });

        programs.forEach(program => {
            container.appendChild(program); // Append sorted programs back to the container
        });
    }

    
    
    
});
