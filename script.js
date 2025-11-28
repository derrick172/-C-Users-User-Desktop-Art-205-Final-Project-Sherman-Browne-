
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if(activeLink) activeLink.classList.add('active');
            });
        };
    });

    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, #main-sections .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Mobile App Developer', 'PC Support Assistant', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const profileModal = document.getElementById('profile-info-modal');
const profileImg = document.getElementById('home-profile-img');
const viewMoreBtns = document.querySelectorAll('.view-more-btn');
const closeProfileModalBtn = document.getElementById('close-profile-modal');
const closeAndGotoContact = document.getElementById('close-and-goto-contact');

function animateSkills() {
    const progressBars = document.querySelectorAll('.skill-per');
    progressBars.forEach(bar => {
        
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = bar.getAttribute('data-width');
        }, 100);
    });
}

function openProfileModal() {
    profileModal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
    animateSkills(); 
    
    setTimeout(() => {
        ScrollReveal().sync();
    }, 50);
}


function closeProfileModal() {
    profileModal.classList.remove('active');
    document.body.style.overflow = ''; 
}

if (profileImg) {
    profileImg.addEventListener('click', openProfileModal);
}

viewMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openProfileModal();
    });
});

if (closeProfileModalBtn) {
    closeProfileModalBtn.addEventListener('click', closeProfileModal);
}


if (closeAndGotoContact) {
    closeAndGotoContact.addEventListener('click', (e) => {
        e.preventDefault();
        closeProfileModal();
        
        setTimeout(() => {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }, 50);
    });
}



const contactForm = document.getElementById('contact-form');
const confirmModal = document.getElementById('confirm-submit-modal');
const confirmSubmitBtn = document.getElementById('confirm-submit');
const cancelSubmitBtn = document.getElementById('cancel-submit');

let formConfirmed = false;

function openConfirmModal() {
    confirmModal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}


function closeConfirmModal() {
    confirmModal.classList.remove('active');
    document.body.style.overflow = '';
}


if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        if (!formConfirmed) {
            openConfirmModal();
        } else {
            
            console.log("Form submission confirmed and executing...");
          
            contactForm.reset();
            formConfirmed = false; 
            
            
            alert("Thank you for your message! It has been sent.");
        }
    });
}


if (confirmSubmitBtn) {
    confirmSubmitBtn.addEventListener('click', () => {
        formConfirmed = true;
        closeConfirmModal();
        
        contactForm.dispatchEvent(new Event('submit', { cancelable: true }));
    });
}


if (cancelSubmitBtn) {
    cancelSubmitBtn.addEventListener('click', closeConfirmModal);
}


const settingsBtn = document.getElementById('settings-btn');
const settingsBox = document.getElementById('settings-box');
const modeToggle = document.getElementById('mode-toggle');
const colorBtns = document.querySelectorAll('.color-btn');

settingsBtn.addEventListener('click', () => {
    settingsBox.classList.toggle('active');
    settingsBtn.querySelector('i').classList.toggle('bx-x'); 
});


document.addEventListener('click', (e) => {
    if (!settingsBox.contains(e.target) && !settingsBtn.contains(e.target)) {
        settingsBox.classList.remove('active');
    }
});


modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
});


colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        document.documentElement.style.setProperty('--main-color', color);
    });
});