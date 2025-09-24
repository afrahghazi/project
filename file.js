const heroSection = document.getElementById('hero-1');

if (heroSection) {
    const text ="HI, I am Afrah";
    let i =0;
    function typeWriter() {
        if (i < text.length) {
            heroSection.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
}

const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');