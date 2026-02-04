// Main JavaScript for All Pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Set active page in navigation
    setActiveNavLink();
    
    // Load featured content based on page
    loadFeaturedContent();
    
    // Newsletter subscription
    const subscribeButtons = document.querySelectorAll('.subscribe-box button');
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            if (input.value && input.value.includes('@')) {
                alert('Thank you for subscribing!');
                input.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === '' && linkPage === './')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function loadFeaturedContent() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadFeaturedInternships();
            break;
        case 'courses.html':
            // Courses are loaded in courses.js
            break;
        case 'companies.html':
            // Companies are loaded in companies.js
            break;
        case 'blog.html':
            // Blog posts are loaded in blog.js
            break;
    }
}

// Featured Internships for Homepage
const featuredInternships = [
    {
        title: "Frontend Developer Intern",
        company: "Tech Solutions Inc.",
        logo: "images/google.png",
        type: "Remote",
        duration: "3 months",
        stipend: "$500/month",
        location: "Karachi, Pakistan"
    },
    {
        title: "Marketing Intern",
        company: "Digital Marketing Pro",
        logo: "images/meta.jpg",
        type: "On-site",
        duration: "2 months",
        stipend: "$300/month",
        location: "Lahore, Pakistan"
    },
    {
        title: "UI/UX Designer Intern",
        company: "Creative Designs",
        logo: "images/logo.png",
        type: "Hybrid",
        duration: "4 months",
        stipend: "$400/month",
        location: "Islamabad, Pakistan"
    }
];

function loadFeaturedInternships() {
    const internshipGrid = document.querySelector('.internship-grid');
    
    if (!internshipGrid) return;
    
    internshipGrid.innerHTML = '';
    
    featuredInternships.forEach(internship => {
        const card = document.createElement('div');
        card.className = 'internship-card';
        
        card.innerHTML = `
            <div class="internship-header">
                <h3>${internship.title}</h3>
                <div class="company">
                    <img src="${internship.logo}" alt="${internship.company}">
                    <span>${internship.company}</span>
                </div>
            </div>
            <div class="internship-body">
                <div class="details">
                    <div class="detail-item">
                        <i class="fas fa-briefcase"></i>
                        <span>${internship.type}</span>
                    </div>
                    <div class="detail-item">
                        <i class="far fa-clock"></i>
                        <span>${internship.duration}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-money-bill"></i>
                        <span>${internship.stipend}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${internship.location}</span>
                    </div>
                </div>
                <button class="apply-btn">Apply Now</button>
            </div>
        `;
        
        internshipGrid.appendChild(card);
    });
    
    // Add click event to apply buttons
    document.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', function() {
            const internshipTitle = this.closest('.internship-card').querySelector('h3').textContent;
            alert(`Applying for: ${internshipTitle}\nYou will be redirected to application form.`);
            // In real implementation: window.location.href = 'apply.html';
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .auth-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('loading')) return;
        
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        this.classList.add('loading');
        
        // Simulate loading
        setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.remove('loading');
        }, 1500);
    });
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

// Search functionality for all pages
document.querySelectorAll('.search-box input, .courses-search input, .blog-search input').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value;
            if (searchTerm.trim()) {
                alert(`Searching for: ${searchTerm}`);
                // In real implementation, perform search
            }
        }
    });
});
// main.js - General functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
            // Prevent body scroll when menu is open
            body.classList.toggle('no-scroll', navMenu.classList.contains('active'));
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
            body.classList.remove('no-scroll');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnHamburger) {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
            body.classList.remove('no-scroll');
        }
    });

    // Sticky navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'white';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add CSS class for no-scroll
    const style = document.createElement('style');
    style.textContent = `
        .no-scroll {
            overflow: hidden;
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                z-index: 1000;
            }
            
            .nav-menu.active {
                display: flex;
            }
            
            .nav-menu li {
                width: 100%;
                margin: 10px 0;
            }
            
            .nav-menu a {
                display: block;
                padding: 10px;
                width: 100%;
                border-radius: 5px;
            }
            
            .nav-menu a:hover,
            .nav-menu a.active {
                background: #f5f5f5;
            }
        }
    `;
    document.head.appendChild(style);
});