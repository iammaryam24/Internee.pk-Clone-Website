// internships.js - Enhanced with 9 diverse internships

// Sample internship data with varied details
const internships = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "Tech Solutions Inc.",
        posted: "2 days ago",
        category: "software",
        type: "remote",
        location: "Karachi, Pakistan",
        duration: "3 months",
        stipend: "$500/month",
        description: "Looking for a motivated intern to join our team. Gain hands-on experience in real-world projects. Work on modern React applications and collaborate with senior developers to build responsive web applications.",
        tags: ["React", "JavaScript", "CSS", "Remote", "Paid"],
        featured: true,
        urgent: false
    },
    {
        id: 2,
        title: "Marketing Intern",
        company: "Digital Marketing Pro",
        posted: "1 week ago",
        category: "marketing",
        type: "on-site",
        location: "Karachi, Pakistan",
        duration: "2 months",
        stipend: "Unpaid",
        description: "Looking for a motivated intern to join our team. Gain hands-on experience in marketing campaigns. Help create social media strategies, analyze campaign performance, and learn about digital advertising.",
        tags: ["Social Media", "SEO", "Content", "On-site", "Learning"],
        featured: false,
        urgent: true
    },
    {
        id: 3,
        title: "UI/UX Designer Intern",
        company: "Creative Designers",
        posted: "3 days ago",
        category: "design",
        type: "hybrid",
        location: "Lahore, Pakistan",
        duration: "4 months",
        stipend: "$300/month",
        description: "Looking for a motivated intern to join our team. Gain hands-on experience in design projects. Create wireframes, prototypes, and user interfaces for web and mobile applications using Figma and Adobe Suite.",
        tags: ["Figma", "UI Design", "UX Research", "Hybrid", "Paid"],
        featured: true,
        urgent: false
    },
    {
        id: 4,
        title: "Backend Developer Intern",
        company: "Cloud Systems Ltd",
        posted: "1 day ago",
        category: "software",
        type: "remote",
        location: "Remote",
        duration: "6 months",
        stipend: "$600/month",
        description: "Work with Node.js and MongoDB to build scalable APIs. Learn about cloud deployment, microservices architecture, and database management. Perfect for computer science students.",
        tags: ["Node.js", "MongoDB", "API", "Remote", "High Stipend"],
        featured: false,
        urgent: true
    },
    {
        id: 5,
        title: "Content Writer Intern",
        company: "Content Creators Co.",
        posted: "4 days ago",
        category: "marketing",
        type: "hybrid",
        location: "Islamabad, Pakistan",
        duration: "3 months",
        stipend: "$250/month",
        description: "Create engaging content for blogs and social media platforms. Research industry trends, optimize content for SEO, and work with marketing team to develop content strategies.",
        tags: ["Writing", "SEO", "Blogging", "Hybrid", "Content"],
        featured: false,
        urgent: false
    },
    {
        id: 6,
        title: "Data Science Intern",
        company: "Data Analytics Pro",
        posted: "5 days ago",
        category: "software",
        type: "on-site",
        location: "Karachi, Pakistan",
        duration: "5 months",
        stipend: "$700/month",
        description: "Work with Python and ML algorithms to analyze large datasets. Create data visualizations and predictive models. Experience with Pandas, NumPy, and Scikit-learn required.",
        tags: ["Python", "Machine Learning", "Data Analysis", "On-site", "High Stipend"],
        featured: true,
        urgent: false
    },
    {
        id: 7,
        title: "Business Development Intern",
        company: "Growth Partners",
        posted: "2 weeks ago",
        category: "business",
        type: "hybrid",
        location: "Lahore, Pakistan",
        duration: "3 months",
        stipend: "$350/month",
        description: "Assist in market research and client acquisition. Learn sales strategies and business development techniques. Work closely with the sales team to identify new opportunities.",
        tags: ["Sales", "Business", "Market Research", "Hybrid", "Strategy"],
        featured: false,
        urgent: false
    },
    {
        id: 8,
        title: "Mobile App Developer Intern",
        company: "App Innovations",
        posted: "6 days ago",
        category: "software",
        type: "remote",
        location: "Remote",
        duration: "4 months",
        stipend: "$550/month",
        description: "Develop cross-platform mobile applications using React Native. Work on app deployment and maintenance. Learn about mobile UI/UX best practices and performance optimization.",
        tags: ["React Native", "Mobile", "iOS", "Android", "Cross-platform"],
        featured: false,
        urgent: true
    },
    {
        id: 9,
        title: "Graphic Designer Intern",
        company: "Visual Arts Studio",
        posted: "Just now",
        category: "design",
        type: "on-site",
        location: "Karachi, Pakistan",
        duration: "2 months",
        stipend: "$200/month",
        description: "Create visual content for digital and print media. Work on branding, social media graphics, and marketing materials. Must be proficient in Adobe Creative Suite.",
        tags: ["Adobe Suite", "Graphics", "Branding", "On-site", "Creative"],
        featured: true,
        urgent: true
    },
    {
        id: 10,
        title: "HR & Recruitment Intern",
        company: "Talent Finders",
        posted: "3 days ago",
        category: "business",
        type: "remote",
        location: "Remote",
        duration: "3 months",
        stipend: "Unpaid",
        description: "Assist in recruitment processes, screening resumes, and coordinating interviews. Learn about HR practices and talent acquisition strategies in a fast-paced environment.",
        tags: ["HR", "Recruitment", "Talent", "Remote", "Learning"],
        featured: false,
        urgent: false
    },
    {
        id: 11,
        title: "Cybersecurity Intern",
        company: "SecureNet Solutions",
        posted: "1 week ago",
        category: "software",
        type: "hybrid",
        location: "Islamabad, Pakistan",
        duration: "4 months",
        stipend: "$400/month",
        description: "Learn about network security, vulnerability assessment, and ethical hacking. Work with security tools and assist in security audits. Basic networking knowledge required.",
        tags: ["Security", "Networking", "Ethical Hacking", "Hybrid", "In-demand"],
        featured: false,
        urgent: false
    },
    {
        id: 12,
        title: "Social Media Manager Intern",
        company: "Social Buzz Agency",
        posted: "2 days ago",
        category: "marketing",
        type: "remote",
        location: "Remote",
        duration: "2 months",
        stipend: "$280/month",
        description: "Manage social media accounts, create engaging content, and analyze performance metrics. Learn about social media algorithms and growth strategies.",
        tags: ["Social Media", "Management", "Analytics", "Remote", "Content"],
        featured: true,
        urgent: false
    }
];

// Function to create internship card HTML with enhanced styling
function createInternshipCard(internship) {
    // Determine badge classes
    const categoryClass = internship.category;
    const typeClass = internship.type;
    const isFeatured = internship.featured;
    const isUrgent = internship.urgent;
    const hasStipend = internship.stipend !== "Unpaid";
    
    // Create tags HTML with unique styling for each type
    const tagsHTML = internship.tags.map(tag => {
        const tagClass = tag.toLowerCase().includes('remote') ? 'tag-remote' :
                        tag.toLowerCase().includes('hybrid') ? 'tag-hybrid' :
                        tag.toLowerCase().includes('on-site') ? 'tag-onsite' :
                        tag.toLowerCase().includes('paid') ? 'tag-paid' :
                        tag.toLowerCase().includes('learning') ? 'tag-business' :
                        tag.toLowerCase().includes('high stipend') ? 'tag-software' :
                        tag.toLowerCase().includes('creative') ? 'tag-design' :
                        `${internship.category}`;
        return `<span class="tag tag-${tagClass}">${tag}</span>`;
    }).join('');
    
    // Create location badge with unique city styling
    const locationClass = internship.location.includes('Karachi') ? 'karachi' :
                         internship.location.includes('Lahore') ? 'lahore' :
                         internship.location.includes('Islamabad') ? '' : 'remote';
    
    // Create unique icon for each category
    const categoryIcon = {
        'software': 'fas fa-laptop-code',
        'marketing': 'fas fa-chart-line',
        'design': 'fas fa-palette',
        'business': 'fas fa-briefcase'
    }[internship.category] || 'fas fa-briefcase';

    return `
        <div class="internship-card ${isFeatured ? 'featured' : ''}" data-category="${internship.category}">
            ${isFeatured ? '<div class="featured-badge"><i class="fas fa-star"></i> Featured</div>' : ''}
            ${isUrgent ? '<div class="urgent-badge"><i class="fas fa-bolt"></i> Urgent Hiring</div>' : ''}
            
            <div class="internship-header">
                <div class="internship-title">
                    <h3><i class="${categoryIcon}"></i> ${internship.title}</h3>
                    <div class="company-name">
                        <i class="fas fa-building"></i>
                        ${internship.company}
                    </div>
                </div>
                ${hasStipend ? 
                    `<div class="stipend-amount">
                        <i class="fas fa-money-bill-wave"></i>
                        ${internship.stipend}
                    </div>` : 
                    `<div class="stipend-amount" style="background: rgba(107, 114, 128, 0.1); color: var(--text-light);">
                        <i class="fas fa-graduation-cap"></i>
                        Learning Opportunity
                    </div>`
                }
            </div>
            
            <div class="internship-details">
                <div class="detail-item" data-type="${typeClass}">
                    <i class="fas fa-laptop-house"></i>
                    <span>${internship.type.charAt(0).toUpperCase() + internship.type.slice(1)}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="location-badge ${locationClass}">${internship.location}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span class="duration-badge">${internship.duration}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${internship.posted}</span>
                </div>
            </div>
            
            <p class="internship-description">${internship.description}</p>
            
            <div class="internship-tags">
                ${tagsHTML}
            </div>
            
            <div class="internship-footer">
                <div class="posted-date">
                    <i class="far fa-calendar"></i>
                    Posted ${internship.posted}
                </div>
                <button class="apply-btn" data-id="${internship.id}">
                    <i class="fas fa-paper-plane"></i> Apply Now
                </button>
            </div>
        </div>
    `;
}

// Function to render internship list
function renderInternshipList(internshipsToRender) {
    const container = document.getElementById('internshipList');
    const countElement = document.getElementById('internshipCount');
    
    if (!container || !countElement) return;
    
    // Update count
    countElement.textContent = `(${internshipsToRender.length})`;
    
    // Clear container
    container.innerHTML = '';
    
    // Sort by featured first, then urgent, then recent
    const sortedInternships = [...internshipsToRender].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.urgent && !b.urgent) return -1;
        if (!a.urgent && b.urgent) return 1;
        return new Date(b.posted) - new Date(a.posted);
    });
    
    // Render each internship
    sortedInternships.forEach(internship => {
        container.innerHTML += createInternshipCard(internship);
    });
    
    // Add event listeners to apply buttons
    document.querySelectorAll('.apply-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            applyForInternship(id);
        });
    });
}

// Function to handle apply button click
function applyForInternship(id) {
    const internship = internships.find(i => i.id == id);
    if (!internship) return;
    
    // Check if user is logged in (simplified check)
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    
    if (!isLoggedIn) {
        // Redirect to login page
        window.location.href = 'login.html?redirect=internships.html';
        return;
    }
    
    // Show application modal
    showApplicationModal(internship);
}

// Function to show application modal
function showApplicationModal(internship) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="applicationModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Apply for ${internship.title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="company-info">
                        <strong>Company:</strong> ${internship.company}
                    </div>
                    <div class="internship-details">
                        <strong>Location:</strong> ${internship.location}
                        <br>
                        <strong>Duration:</strong> ${internship.duration}
                        <br>
                        <strong>Stipend:</strong> ${internship.stipend}
                    </div>
                    <div class="application-form">
                        <textarea placeholder="Tell us why you're interested in this internship..." rows="4"></textarea>
                        <button class="submit-application">Submit Application</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles if not present
    addModalStyles();
    
    // Add event listeners
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('applicationModal').remove();
    });
    
    document.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            document.getElementById('applicationModal').remove();
        }
    });
    
    document.querySelector('.submit-application').addEventListener('click', () => {
        alert('Application submitted successfully!');
        document.getElementById('applicationModal').remove();
    });
}

// Add modal styles
function addModalStyles() {
    if (!document.querySelector('#modalStyles')) {
        const styles = document.createElement('style');
        styles.id = 'modalStyles';
        styles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                padding: 20px;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                width: 100%;
                max-width: 500px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                animation: modalSlideIn 0.3s ease;
            }
            
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px 25px;
                border-bottom: 1px solid var(--border);
            }
            
            .modal-header h3 {
                margin: 0;
                font-size: 1.3rem;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 1.8rem;
                cursor: pointer;
                color: var(--text-light);
                line-height: 1;
            }
            
            .modal-body {
                padding: 25px;
            }
            
            .company-info, .internship-details {
                margin-bottom: 20px;
                padding: 15px;
                background: var(--bg-light);
                border-radius: 8px;
            }
            
            .application-form textarea {
                width: 100%;
                padding: 12px;
                border: 2px solid var(--border);
                border-radius: 8px;
                margin-bottom: 15px;
                font-family: inherit;
                resize: vertical;
            }
            
            .submit-application {
                width: 100%;
                padding: 14px;
                background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .submit-application:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
            }
        `;
        document.head.appendChild(styles);
    }
}

// Function to filter internships
function filterInternships() {
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim())
        .filter(text => !text.includes('months') && !['Remote', 'On-site', 'Hybrid'].includes(text));
    
    const selectedTypes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim())
        .filter(text => ['Remote', 'On-site', 'Hybrid'].includes(text));
    
    const selectedDurations = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.textContent.trim())
        .filter(text => text.includes('months'));
    
    let filtered = [...internships];
    
    // Filter by category
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(internship => {
            const categoryMap = {
                'Software Development': 'software',
                'Marketing': 'marketing',
                'Design': 'design',
                'Business': 'business',
                'Engineering': 'software'
            };
            return selectedCategories.some(cat => {
                const mappedCat = categoryMap[cat];
                return mappedCat === internship.category;
            });
        });
    }
    
    // Filter by type
    if (selectedTypes.length > 0) {
        filtered = filtered.filter(internship => 
            selectedTypes.some(type => 
                type.toLowerCase().replace('-', '') === internship.type
            )
        );
    }
    
    // Filter by duration
    if (selectedDurations.length > 0) {
        filtered = filtered.filter(internship => {
            const durationMonths = parseInt(internship.duration);
            return selectedDurations.some(duration => {
                if (duration === '1-2 months') return durationMonths <= 2;
                if (duration === '3-4 months') return durationMonths >= 3 && durationMonths <= 4;
                if (duration === '5-6 months') return durationMonths >= 5;
                return false;
            });
        });
    }
    
    // Sort by selected option
    const sortBy = document.querySelector('.sort-options select')?.value || 'recent';
    filtered.sort((a, b) => {
        if (sortBy === 'stipend') {
            const aStipend = parseInt(a.stipend.replace(/[^0-9]/g, '') || 0);
            const bStipend = parseInt(b.stipend.replace(/[^0-9]/g, '') || 0);
            return bStipend - aStipend;
        } else if (sortBy === 'recent') {
            // Simple logic for "recent" - lower number in "posted" means more recent
            const aDays = getDaysFromPosted(a.posted);
            const bDays = getDaysFromPosted(b.posted);
            return aDays - bDays;
        }
        return 0;
    });
    
    renderInternshipList(filtered);
}

// Helper function to convert "posted" string to days
function getDaysFromPosted(postedStr) {
    if (postedStr.includes('Just now') || postedStr.includes('Today')) return 0;
    if (postedStr.includes('day')) return parseInt(postedStr);
    if (postedStr.includes('week')) return parseInt(postedStr) * 7;
    return 999; // For older posts
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.search-box input');
    const categorySelect = document.querySelector('.search-box select:nth-of-type(1)');
    const locationSelect = document.querySelector('.search-box select:nth-of-type(2)');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect?.value || '';
        const selectedLocation = locationSelect?.value || '';
        
        let results = [...internships];
        
        // Filter by search term
        if (searchTerm) {
            results = results.filter(internship => 
                internship.title.toLowerCase().includes(searchTerm) ||
                internship.company.toLowerCase().includes(searchTerm) ||
                internship.description.toLowerCase().includes(searchTerm) ||
                internship.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        // Filter by category
        if (selectedCategory) {
            const categoryMap = {
                'software': 'software',
                'marketing': 'marketing',
                'design': 'design',
                'business': 'business'
            };
            results = results.filter(internship => 
                internship.category === categoryMap[selectedCategory]
            );
        }
        
        // Filter by location
        if (selectedLocation) {
            results = results.filter(internship => 
                internship.location.toLowerCase().includes(selectedLocation) ||
                (selectedLocation === 'remote' && internship.type === 'remote')
            );
        }
        
        renderInternshipList(results);
        
        // Show search results message
        if (searchTerm || selectedCategory || selectedLocation) {
            const resultsCount = results.length;
            const message = resultsCount === 0 ? 
                'No internships found matching your search criteria.' :
                `Found ${resultsCount} internship${resultsCount !== 1 ? 's' : ''} matching your search`;
            
            showNotification(message);
        }
    }
}

// Function to show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'error' ? '#ef4444' : '#10b981'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Add animation styles if not present
    if (!document.querySelector('#notificationStyles')) {
        const styles = document.createElement('style');
        styles.id = 'notificationStyles';
        styles.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initial render with all internships
    renderInternshipList(internships);
    
    // Set up filter event listeners
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterInternships);
    });
    
    // Set up sort event listener
    const sortSelect = document.querySelector('.sort-options select');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterInternships);
    }
    
    // Set up search functionality
    handleSearch();
    
    // Set up pagination (simplified for demo)
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show which page is being loaded
            const pageNum = this.textContent.trim();
            if (!isNaN(pageNum)) {
                console.log(`Loading page ${pageNum}...`);
            } else if (this.textContent.includes('Next')) {
                showNotification('Loading more internships...');
            }
        });
    });
    
    // Add hover effects for cards
    document.addEventListener('mouseover', function(e) {
        const card = e.target.closest('.internship-card');
        if (card) {
            card.style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        const card = e.target.closest('.internship-card');
        if (card) {
            card.style.transform = 'translateY(0)';
        }
    });
});