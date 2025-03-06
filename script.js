document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) 
    {
        contactForm.addEventListener('submit', function (event)
        {
            event.preventDefault();
            if (contactForm.checkValidity())
            {
                formAlert.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        Message sent successfully!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
                contactForm.reset();
            } else {
                formAlert.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Please fix the errors in the form.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
            }
        });
    }
    const sections = document.querySelectorAll('section');

    function checkSections() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPosition > sectionTop - windowHeight + sectionHeight / 4) 
                { 
                section.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkSections);
    checkSections();
});