function applyTimeTheme() {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;

    // 1. Toggle the CSS class on the body
    if (isNight) {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }

    // 2. Safely swap the homepage hero image (if it exists on this page)
    const heroImg = document.getElementById('hero-image');
    if (heroImg) {
        if (isNight) {
            heroImg.src = 'assets/night_banner.jpg'; 
        } else {
            heroImg.src = 'assets/day_banner.jpg'; 
        }
    }
}

// Run the script immediately
applyTimeTheme();
