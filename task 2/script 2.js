let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function handleScroll() {
    let top = window.scrollY;

    section.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
});