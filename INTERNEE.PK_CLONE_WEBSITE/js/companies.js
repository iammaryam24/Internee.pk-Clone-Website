// Companies Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load companies
    loadCompanies();
    
    // Initialize slider
    initCompaniesSlider();
    
    // Filter functionality
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', filterCompanies);
    }
});

// Companies data
const companiesData = [
    {
        id: 1,
        name: "Tech Innovations Inc.",
        category: "Technology",
        description: "Leading tech company specializing in AI and machine learning solutions",
        location: "Karachi, Pakistan",
        size: "Medium",
        type: "Hybrid",
        openings: 15,
        logo: "images/google.png",
        tags: ["AI", "Machine Learning", "Cloud", "Startup"]
    },
    {
        id: 2,
        name: "Digital Marketing Pro",
        category: "Marketing",
        description: "Award-winning digital marketing agency with global clients",
        location: "Lahore, Pakistan",
        size: "Small",
        type: "Remote",
        openings: 8,
        logo: "images/meta.jpg",
        tags: ["SEO", "Social Media", "Content", "Advertising"]
    },
    {
        id: 3,
        name: "Creative Designs Studio",
        category: "Design",
        description: "Innovative design agency creating stunning user experiences",
        location: "Islamabad, Pakistan",
        size: "Startup",
        type: "On-site",
        openings: 6,
        logo: "images/logo.png",
        tags: ["UI/UX", "Branding", "Web Design", "Mobile"]
    },
    {
        id: 4,
        name: "Cloud Systems Ltd.",
        category: "Technology",
        description: "Enterprise cloud solutions provider with Fortune 500 clients",
        location: "Remote",
        size: "Large",
        type: "Remote",
        openings: 25,
        logo: "images/google.png",
        tags: ["Cloud", "DevOps", "Security", "Enterprise"]
    },
    {
        id: 5,
        name: "Finance Corp",
        category: "Finance",
        description: "Leading financial services company with innovative banking solutions",
        location: "Karachi, Pakistan",
        size: "Large",
        type: "Hybrid",
        openings: 12,
        logo: "images/meta.jpg",
        tags: ["Fintech", "Banking", "Analytics", "Finance"]
    },
    {
        id: 6,
        name: "HealthTech Solutions",
        category: "Healthcare",
        description: "Revolutionizing healthcare with technology and innovation",
        location: "Lahore, Pakistan",
        size: "Medium",
        type: "On-site",
        openings: 10,
        logo: "images/logo.png",
        tags: ["HealthTech", "Telemedicine", "Medical", "Innovation"]
    }
];

// Slider companies data
const sliderCompanies = [
    { name: "Google", logo: "images/google.png", description: "Tech Giant" },
    { name: "Meta", logo: "images/meta.jpg", description: "Social Media" },
    { name: "Microsoft", logo: "images/logo.png", description: "Software" },
    { name: "Amazon", logo: "images/google.png", description: "E-commerce" },
    { name: "Apple", logo: "images/meta.jpg", description: "Technology" },
    { name: "Netflix", logo: "images/logo.png", description: "Entertainment" },
    { name: "Tesla", logo: "images/google.png", description: "Automotive" },
    { name: "Spotify", logo: "images/meta.jpg", description: "Music" }
];

function loadCompanies() {
    const companiesGrid = document.getElementById('companiesGrid');
    if (!companiesGrid) return;
    
    companiesGrid.innerHTML = '';
    
    companiesData.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card-full';
        
        companyCard.innerHTML = `
            <div class="company-header">
                <div class="company-logo">
                    <img src="${company.logo}" alt="${company.name}">
                </div>
                <h3>${company.name}</h3>
                <span class="company-category">${company.category}</span>
            </div>
            <div class="company-body">
                <p class="company-description">${company.description}</p>
                
                <div class="company-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${company.location}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <span>${company.size}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-briefcase"></i>
                        <span>${company.type}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-door-open"></i>
                        <span>${company.openings} Openings</span>
                    </div>
                </div>
                
                <div class="company-tags">
                    ${company.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                <div class="company-actions">
                    <a href="company-details.html?id=${company.id}" class="btn-view">View Details</a>
                    <button class="btn-apply" data-id="${company.id}">View Internships</button>
                </div>
            </div>
        `;
        
        companiesGrid.appendChild(companyCard);
    });
    
    // Add event listeners to view internships buttons
    document.querySelectorAll('.btn-apply').forEach(button => {
        button.addEventListener('click', function() {
            const companyId = this.dataset.id;
            const company = companiesData.find(c => c.id == companyId);
            if (company) {
                alert(`Viewing internships at ${company.name}`);
                // In real implementation: window.location.href = `internships.html?company=${companyId}`;
            }
        });
    });
}

function initCompaniesSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;
    
    // Clear existing content
    sliderTrack.innerHTML = '';
    
    // Duplicate slider items for seamless scrolling
    const items = [...sliderCompanies, ...sliderCompanies];
    
    items.forEach(company => {
        const sliderItem = document.createElement('div');
        sliderItem.className = 'slider-item';
        
        sliderItem.innerHTML = `
            <div class="slider-logo">
                <img src="${company.logo}" alt="${company.name}">
            </div>
            <h4>${company.name}</h4>
            <p>${company.description}</p>
        `;
        
        sliderTrack.appendChild(sliderItem);
    });
}

function filterCompanies() {
    const industry = document.querySelector('select:nth-of-type(1)').value;
    const size = document.querySelector('select:nth-of-type(2)').value;
    const location = document.querySelector('select:nth-of-type(3)').value;
    const search = document.querySelector('input[type="text"]').value.toLowerCase();
    
    const companyCards = document.querySelectorAll('.company-card-full');
    
    companyCards.forEach(card => {
        const companyName = card.querySelector('h3').textContent.toLowerCase();
        const companyCategory = card.querySelector('.company-category').textContent.toLowerCase();
        const companyLocation = card.querySelector('.detail-item:nth-child(1) span').textContent.toLowerCase();
        const companySize = card.querySelector('.detail-item:nth-child(2) span').textContent.toLowerCase();
        
        let show = true;
        
        if (industry && !companyCategory.includes(industry.toLowerCase())) {
            show = false;
        }
        
        if (size) {
            const sizeMap = {
                'startup': 'startup',
                'small': 'small',
                'medium': 'medium',
                'large': 'large'
            };
            if (!companySize.includes(sizeMap[size])) {
                show = false;
            }
        }
        
        if (location && !companyLocation.includes(location.toLowerCase())) {
            show = false;
        }
        
        if (search && !companyName.includes(search)) {
            show = false;
        }
        
        if (show) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}