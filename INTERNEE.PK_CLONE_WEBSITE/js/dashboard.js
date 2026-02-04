// Dashboard JavaScript for Internee.pk

// DOM Elements
const userMenuBtn = document.querySelector('.user-btn');
const userDropdown = document.querySelector('.user-dropdown');
const logoutBtn = document.querySelector('#logoutBtn');
const applyButtons = document.querySelectorAll('.btn-sm');

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    checkUserAuth();
    
    // Initialize user menu
    initUserMenu();
    
    // Initialize application buttons
    initApplyButtons();
    
    // Load user data
    loadUserData();
});

// Check User Authentication
function checkUserAuth() {
    const user = localStorage.getItem('internee_user') || sessionStorage.getItem('internee_user');
    
    if (!user) {
        // Redirect to login if not authenticated
        window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.pathname);
        return;
    }
    
    // Parse user data
    try {
        const userData = JSON.parse(user);
        updateUserInfo(userData);
    } catch (error) {
        console.error('Error parsing user data:', error);
        // Clear invalid data and redirect to login
        localStorage.removeItem('internee_user');
        sessionStorage.removeItem('internee_user');
        window.location.href = 'login.html';
    }
}

// Update User Information
function updateUserInfo(userData) {
    // Update welcome message
    const welcomeText = document.querySelector('.welcome-section h1');
    if (welcomeText && userData.name) {
        const firstName = userData.name.split(' ')[0];
        welcomeText.innerHTML = `Welcome back, <span class="highlight">${firstName}!</span>`;
    }
    
    // Update user menu
    const userAvatar = document.querySelector('.user-avatar');
    const userName = document.querySelector('.user-btn span');
    
    if (userAvatar && userData.avatar) {
        userAvatar.src = userData.avatar;
    }
    
    if (userName && userData.name) {
        const shortName = userData.name.split(' ')[0] + ' ' + userData.name.split(' ')[1]?.charAt(0) + '.';
        userName.textContent = shortName;
    }
}

// User Menu Functions
function initUserMenu() {
    // Toggle dropdown
    userMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        userDropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking inside
    userDropdown?.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Logout functionality
    logoutBtn?.addEventListener('click', handleLogout);
}

// Apply Buttons
function initApplyButtons() {
    applyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const internshipTitle = this.closest('.recommendation-item').querySelector('h4').textContent;
            const companyName = this.closest('.recommendation-item').querySelector('p').textContent.split('•')[0].trim();
            
            applyForInternship(`${companyName} - ${internshipTitle}`, this);
        });
    });
}

function applyForInternship(title, button) {
    // Show loading state
    const originalText = button.textContent;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    button.disabled = true;
    
    // Simulate application process
    setTimeout(() => {
        // Success
        showNotification(`Successfully applied for "${title}"!`, 'success');
        
        // Update button
        button.innerHTML = '<i class="fas fa-check"></i> Applied';
        button.classList.remove('btn-primary');
        button.classList.add('btn-secondary');
        button.disabled = true;
        
        // Update application count
        updateApplicationCount(1);
        
        // Store application
        storeApplication(title);
    }, 1500);
}

// Store Application
function storeApplication(title) {
    const user = JSON.parse(localStorage.getItem('internee_user') || sessionStorage.getItem('internee_user'));
    
    if (user) {
        user.applications = user.applications || [];
        user.applications.push({
            title: title,
            date: new Date().toISOString(),
            status: 'pending'
        });
        
        // Update storage
        if (localStorage.getItem('internee_user')) {
            localStorage.setItem('internee_user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('internee_user', JSON.stringify(user));
        }
    }
}

// Update Application Count
function updateApplicationCount(increment = 1) {
    const applicationsCount = document.querySelector('.stat-card:nth-child(1) h3');
    if (applicationsCount) {
        const currentCount = parseInt(applicationsCount.textContent);
        applicationsCount.textContent = currentCount + increment;
    }
}

// Load User Data
function loadUserData() {
    // Load applications
    loadApplications();
    
    // Load recommendations
    loadRecommendations();
    
    // Load interviews
    loadInterviews();
    
    // Load profile completion
    loadProfileCompletion();
}

function loadApplications() {
    const user = JSON.parse(localStorage.getItem('internee_user') || sessionStorage.getItem('internee_user'));
    const applicationsList = document.querySelector('.applications-list');
    
    if (!applicationsList || !user?.applications) return;
    
    // Clear existing items
    applicationsList.innerHTML = '';
    
    // Get recent applications (last 3)
    const recentApps = user.applications.slice(-3).reverse();
    
    recentApps.forEach(app => {
        const appItem = document.createElement('div');
        appItem.className = 'application-item';
        
        // Parse title for company and position
        const [company, position] = app.title.split(' - ');
        
        appItem.innerHTML = `
            <div class="application-info">
                <img src="https://via.placeholder.com/40" alt="${company}" class="company-logo">
                <div>
                    <h4>${position || app.title}</h4>
                    <p>${company || 'Company'} • Applied ${formatDate(app.date)}</p>
                </div>
            </div>
            <div class="application-status">
                <span class="status-badge status-${app.status}">${getStatusText(app.status)}</span>
            </div>
        `;
        
        applicationsList.appendChild(appItem);
    });
}

function loadRecommendations() {
    // In a real app, this would be an API call
    const recommendations = [
        {
            company: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            title: "Machine Learning Intern",
            location: "Remote"
        },
        {
            company: "Netflix",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            title: "UI/UX Design Intern",
            location: "On-site"
        }
    ];
    
    const recommendationsContainer = document.querySelector('.recommendations');
    if (!recommendationsContainer) return;
    
    recommendations.forEach(rec => {
        const recItem = document.createElement('div');
        recItem.className = 'recommendation-item';
        
        recItem.innerHTML = `
            <div class="company-info">
                <img src="${rec.logo}" alt="${rec.company}" class="company-logo">
                <div>
                    <h4>${rec.title}</h4>
                    <p>${rec.company} • ${rec.location}</p>
                </div>
            </div>
            <button class="btn btn-primary btn-sm">Apply Now</button>
        `;
        
        recommendationsContainer.appendChild(recItem);
    });
    
    // Re-initialize apply buttons for new items
    initApplyButtons();
}

function loadInterviews() {
    // Mock data
    const interviews = [
        {
            date: "2024-03-15",
            title: "Microsoft - Technical Round",
            time: "2:00 PM - 3:00 PM",
            type: "video",
            platform: "Google Meet"
        },
        {
            date: "2024-03-18",
            title: "Amazon - HR Interview",
            time: "11:00 AM - 12:00 PM",
            type: "phone",
            platform: "Phone Call"
        }
    ];
    
    const interviewsList = document.querySelector('.interviews-list');
    if (!interviewsList) return;
    
    interviews.forEach(interview => {
        const interviewItem = document.createElement('div');
        interviewItem.className = 'interview-item';
        
        const dateObj = new Date(interview.date);
        const day = dateObj.getDate();
        const month = dateObj.toLocaleString('default', { month: 'short' });
        
        interviewItem.innerHTML = `
            <div class="interview-date">
                <div class="date">${day}</div>
                <div class="month">${month}</div>
            </div>
            <div class="interview-details">
                <h4>${interview.title}</h4>
                <p><i class="fas fa-clock"></i> ${interview.time}</p>
                <p><i class="fas fa-${interview.type === 'video' ? 'video' : 'phone'}"></i> ${interview.platform}</p>
            </div>
        `;
        
        interviewsList.appendChild(interviewItem);
    });
}

function loadProfileCompletion() {
    // In a real app, this would be calculated from user data
    const completionPercent = 75;
    const progressBar = document.querySelector('.progress');
    const percentText = document.querySelector('.completion-percent');
    
    if (progressBar) {
        progressBar.style.width = `${completionPercent}%`;
    }
    
    if (percentText) {
        percentText.textContent = `${completionPercent}%`;
    }
}

// Helper Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
}

function getStatusText(status) {
    const statusMap = {
        pending: 'Under Review',
        interview: 'Interview Scheduled',
        offer: 'Offer Received',
        rejected: 'Rejected'
    };
    
    return statusMap[status] || 'Pending';
}

function showNotification(message, type = 'info') {
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'dashboard-notification';
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Logout Function
function handleLogout() {
    // Clear user data
    localStorage.removeItem('internee_user');
    sessionStorage.removeItem('internee_user');
    
    // Show logout message
    showNotification('Logged out successfully', 'success');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Add dashboard-specific styles
const dashboardStyles = document.createElement('style');
dashboardStyles.textContent = `
    .dashboard {
        padding: 120px 0 60px;
        background: var(--bg-slate-50);
        min-height: 100vh;
    }
    
    .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        flex-wrap: wrap;
        gap: 20px;
    }
    
    .welcome-section h1 {
        font-size: 2.5rem;
        margin: 0;
    }
    
    .welcome-section p {
        color: var(--text-slate-500);
        margin: 8px 0 0 0;
    }
    
    .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
    }
    
    .stats-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .dashboard-card {
        background: var(--bg-white);
        border-radius: 16px;
        padding: 30px;
        box-shadow: var(--shadow-md);
        border: 1px solid var(--border-slate-200);
    }
    
    .dashboard-card .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }
    
    .dashboard-card h3 {
        font-size: 1.25rem;
        margin: 0;
    }
    
    .applications-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .application-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-slate-200);
    }
    
    .application-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
    
    .application-info {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    
    .application-info .company-logo {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        object-fit: contain;
        padding: 4px;
        background: var(--bg-white);
        border: 1px solid var(--border-slate-200);
    }
    
    .application-info h4 {
        font-size: 1rem;
        margin: 0 0 4px 0;
    }
    
    .application-info p {
        font-size: 0.875rem;
        color: var(--text-slate-500);
        margin: 0;
    }
    
    .status-badge {
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
    }
    
    .status-review {
        background: rgba(59, 130, 246, 0.1);
        color: var(--primary-blue);
    }
    
    .status-interview {
        background: rgba(245, 158, 11, 0.1);
        color: var(--secondary-amber);
    }
    
    .status-offer {
        background: rgba(16, 185, 129, 0.1);
        color: var(--secondary-emerald);
    }
    
    .recommendations {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .recommendation-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-slate-200);
    }
    
    .recommendation-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
    
    .company-info {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    
    .company-info .company-logo {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
    
    .company-info h4 {
        font-size: 1rem;
        margin: 0 0 4px 0;
    }
    
    .company-info p {
        font-size: 0.875rem;
        color: var(--text-slate-500);
        margin: 0;
    }
    
    .btn-sm {
        padding: 8px 20px;
        font-size: 0.875rem;
    }
    
    .progress-bar {
        height: 8px;
        background: var(--border-slate-200);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 24px;
    }
    
    .progress {
        height: 100%;
        background: var(--gradient-blue);
        border-radius: 4px;
        transition: width 0.3s ease;
    }
    
    .profile-tasks {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    
    .task {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.9375rem;
    }
    
    .task i {
        color: var(--text-slate-400);
    }
    
    .task i.completed {
        color: var(--secondary-emerald);
    }
    
    .interviews-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .interview-item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-slate-200);
    }
    
    .interview-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
    
    .interview-date {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: var(--gradient-blue);
        color: white;
        border-radius: 12px;
        flex-shrink: 0;
    }
    
    .interview-date .date {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1;
    }
    
    .interview-date .month {
        font-size: 0.75rem;
        opacity: 0.9;
    }
    
    .interview-details h4 {
        font-size: 1rem;
        margin: 0 0 8px 0;
    }
    
    .interview-details p {
        font-size: 0.875rem;
        color: var(--text-slate-500);
        margin: 4px 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .user-menu {
        position: relative;
    }
    
    .user-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        background: none;
        border: none;
        padding: 8px 16px;
        border-radius: 12px;
        cursor: pointer;
        transition: var(--transition-normal);
        font-family: inherit;
        font-size: 1rem;
        color: var(--text-slate-700);
    }
    
    .user-btn:hover {
        background: var(--bg-slate-100);
    }
    
    .user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
    }
    
    .user-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        background: var(--bg-white);
        border-radius: 12px;
        box-shadow: var(--shadow-xl);
        padding: 12px;
        min-width: 200px;
        display: none;
        z-index: 1000;
        border: 1px solid var(--border-slate-200);
    }
    
    .user-dropdown.show {
        display: block;
        animation: fadeIn 0.2s ease;
    }
    
    .user-dropdown a {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        text-decoration: none;
        color: var(--text-slate-700);
        border-radius: 8px;
        transition: var(--transition-fast);
        font-size: 0.9375rem;
    }
    
    .user-dropdown a:hover {
        background: var(--bg-slate-100);
        color: var(--primary-blue);
    }
    
    .user-dropdown .divider {
        height: 1px;
        background: var(--border-slate-200);
        margin: 8px 0;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
        }
        
        .stats-cards {
            grid-template-columns: 1fr;
        }
        
        .dashboard-grid {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(dashboardStyles);