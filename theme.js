// Website Circadian Cycle
function applyTimeTheme() {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;


    if (isNight) {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }

    
    const heroImg = document.getElementById('hero-image');
    if (heroImg) {
        if (isNight) {
            heroImg.src = 'Assets/night_banner.jpg'; 
        } else {
            heroImg.src = 'Assets/day_banner.jpg'; 
        }
    }
}

applyTimeTheme();
