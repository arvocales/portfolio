document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function changeSectionStyle() {
        const scrollTop = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                // Activate this section
                document.body.style.backgroundColor = section.id === 'contact' ? 'black' : 'white';
                document.body.style.color = section.id === 'contact' ? 'white' : 'black';
            }
        });
    }

    window.addEventListener('scroll', changeSectionStyle);
    changeSectionStyle(); // Call initially to set styles based on initial scroll position
});
