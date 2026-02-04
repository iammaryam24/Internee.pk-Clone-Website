// Courses Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load courses
    loadCourses();
    
    // Category filter functionality
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            categoryFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.textContent;
            filterCourses(category);
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.courses-search input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterCoursesBySearch(searchTerm);
    });
});

// Courses data
const coursesData = [
    {
        id: 1,
        title: "Full Stack Web Development Bootcamp",
        category: "Web Development",
        description: "Master HTML, CSS, JavaScript, React, Node.js and build real-world projects",
        duration: "12 weeks",
        level: "Beginner",
        price: "$199",
        instructor: "Sarah Johnson",
        image: "images/course1.jpg"
    },
    {
        id: 2,
        title: "Data Science & Machine Learning",
        category: "Data Science",
        description: "Learn Python, Pandas, NumPy, and Machine Learning algorithms",
        duration: "16 weeks",
        level: "Intermediate",
        price: "$299",
        instructor: "David Chen",
        image: "images/course2.jpg"
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        category: "Digital Marketing",
        description: "SEO, Social Media Marketing, Google Ads, and Analytics",
        duration: "8 weeks",
        level: "All Levels",
        price: "$149",
        instructor: "Emma Wilson",
        image: "images/course3.jpg"
    },
    {
        id: 4,
        title: "Mobile App Development with Flutter",
        category: "Mobile Development",
        description: "Build iOS and Android apps using Flutter and Dart",
        duration: "10 weeks",
        level: "Intermediate",
        price: "$249",
        instructor: "Michael Brown",
        image: "images/course1.jpg"
    },
    {
        id: 5,
        title: "UI/UX Design Fundamentals",
        category: "UI/UX Design",
        description: "Learn design principles, Figma, and create stunning interfaces",
        duration: "6 weeks",
        level: "Beginner",
        price: "$179",
        instructor: "Lisa Wang",
        image: "images/course2.jpg"
    },
    {
        id: 6,
        title: "Business Analytics & Excel",
        category: "Business",
        description: "Master Excel, data visualization, and business intelligence",
        duration: "8 weeks",
        level: "All Levels",
        price: "$129",
        instructor: "Robert Kim",
        image: "images/course3.jpg"
    }
];

function loadCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = '';
    
    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.dataset.category = course.category;
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                
                <div class="course-meta">
                    <div>
                        <div class="course-duration">
                            <i class="far fa-clock"></i>
                            <span>${course.duration}</span>
                        </div>
                        <div class="course-level">
                            <i class="fas fa-signal"></i>
                            <span>${course.level}</span>
                        </div>
                    </div>
                    <div class="course-price">${course.price}</div>
                </div>
                
                <div class="course-footer">
                    <div class="course-instructor">
                        <div class="instructor-avatar">
                            ${course.instructor.split(' ').map(name => name[0]).join('')}
                        </div>
                        <span class="instructor-name">${course.instructor}</span>
                    </div>
                    <button class="course-btn" data-id="${course.id}">Enroll Now</button>
                </div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
    
    // Add event listeners to enroll buttons
    document.querySelectorAll('.course-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.dataset.id;
            const course = coursesData.find(c => c.id == courseId);
            if (course) {
                alert(`Enrolling in: ${course.title}\nPrice: ${course.price}`);
                // In real implementation: window.location.href = `course-details.html?id=${courseId}`;
            }
        });
    });
}

function filterCourses(category) {
    const courses = document.querySelectorAll('.course-card');
    
    courses.forEach(course => {
        if (category === 'All Courses' || course.dataset.category === category) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

function filterCoursesBySearch(searchTerm) {
    const courses = document.querySelectorAll('.course-card');
    
    courses.forEach(course => {
        const title = course.querySelector('.course-title').textContent.toLowerCase();
        const description = course.querySelector('.course-description').textContent.toLowerCase();
        const category = course.querySelector('.course-category').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}