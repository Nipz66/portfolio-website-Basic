document.addEventListener("DOMContentLoaded", function () {
    // Add animations to scroll
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
        observer.observe(section);
    });
});
