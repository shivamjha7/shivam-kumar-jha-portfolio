document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile nav if open
            if (navLinks.classList.contains('nav-active')) {
                navToggle();
            }
        });
    });

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    const navToggle = () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        // Animate nav links
        navLinks.querySelectorAll('li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    burger.addEventListener('click', navToggle);

    // Scroll Reveal Effect
    // Select all elements that should reveal on scroll, including the main sections
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            // Trigger when element is 80% visible in viewport
            if (elementTop < viewportHeight * 0.8) {
                el.classList.add('active');
            } else {
                // Optional: remove 'active' when scrolled out of view if you want repeat animation
                // el.classList.remove('active');
            }
        });
    };

    // Initial check on load
    revealOnScroll();

    // Event listener for scroll
    window.addEventListener('scroll', revealOnScroll);

    // Contact Form - Mailto functionality
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:shivamjhafbg9155@gmail.com?subject=${subject}&body=${body}`;


            window.location.href = mailtoLink;

            // Optional: Clear form fields after opening mail client
            this.reset();
        });
    }

    // Optional: Add a subtle animation to footer social icons on load
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.style.opacity = 0;
        link.style.transform = 'translateY(20px)';
        setTimeout(() => {
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            link.style.opacity = 1;
            link.style.transform = 'translateY(0)';
        }, 1500 + (index * 150)); // Delay animation for each icon
    });
});
