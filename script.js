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
//certificate
// Show the pop-up when hovering over any certificate item
const certificateItems = document.querySelectorAll('.certificate-item');

certificateItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const popup = this.querySelector('.certificate-popup');
        popup.style.display = 'flex'; // Show the pop-up
    });

    item.addEventListener('mouseleave', function () {
        const popup = this.querySelector('.certificate-popup');
        popup.style.display = 'none'; // Hide the pop-up
    });
});

// Close the pop-up when clicked anywhere on the pop-up background
const certificatePopups = document.querySelectorAll('.certificate-popup');

certificatePopups.forEach(popup => {
    popup.addEventListener('click', function () {
        this.style.display = 'none'; // Close pop-up
    });
});
