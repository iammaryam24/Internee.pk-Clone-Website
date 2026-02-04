// dashboard.js - Protect dashboard page
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
});

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user || !user.loggedIn) {
        // Get current page path
        const currentPath = window.location.pathname.split('/').pop();
        
        // Redirect to login with current page as redirect parameter
        window.location.href = `login.html?redirect=${encodeURIComponent(currentPath)}`;
        return false;
    }
    
    // Display user info if available
    displayUserInfo(user);
    return true;
}

function displayUserInfo(user) {
    const userNameElement = document.getElementById('userName');
    const userEmailElement = document.getElementById('userEmail');
    
    if (userNameElement) {
        userNameElement.textContent = user.name || 'User';
    }
    
    if (userEmailElement) {
        userEmailElement.textContent = user.email || '';
    }
}

function handleLogout() {
    // Clear user session
    localStorage.removeItem('user');
    
    // Show logout message
    alert('You have been logged out successfully.');
    
    // Redirect to login page
    window.location.href = 'login.html';
}

// Auto-logout after 24 hours (optional)
function checkSessionTimeout() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.timestamp) {
        const currentTime = new Date().getTime();
        const sessionDuration = currentTime - user.timestamp;
        const twentyFourHours = 24 * 60 * 60 * 1000;
        
        if (sessionDuration > twentyFourHours) {
            localStorage.removeItem('user');
            alert('Your session has expired. Please log in again.');
            window.location.href = 'login.html';
        }
    }
}

// Check session timeout every 5 minutes
setInterval(checkSessionTimeout, 5 * 60 * 1000);