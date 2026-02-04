
        // Blog data
        const blogPosts = [
            {
                id: 1,
                title: "How to Ace Your Internship Interview: 10 Proven Tips",
                excerpt: "Learn the secrets to impressing recruiters and landing your dream internship with these expert tips and strategies.",
                image: "https://images.unsplash.com/photo-1573496267618-d78f4d8678fa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                date: "March 15, 2024",
                readTime: "8 min",
                author: "Sarah Johnson",
                category: "Interview Prep",
                tags: ["interview", "career", "tips"]
            },
            {
                id: 2,
                title: "Top 5 Skills Employers Look For in 2024",
                excerpt: "Discover the most in-demand skills that will make you stand out to employers this year.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                date: "March 12, 2024",
                readTime: "5 min",
                author: "Michael Chen",
                category: "Career Tips",
                tags: ["skills", "employers", "career"]
            },
            {
                id: 3,
                title: "Remote Internship Success Guide",
                excerpt: "Master the art of working remotely and make the most of your virtual internship experience.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                date: "March 10, 2024",
                readTime: "7 min",
                author: "Emma Rodriguez",
                category: "Skill Development",
                tags: ["remote", "internship", "work"]
            },
            {
                id: 4,
                title: "Building Your Professional Network from Scratch",
                excerpt: "Learn how to build meaningful professional relationships that will advance your career.",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                date: "March 8, 2024",
                readTime: "6 min",
                author: "David Park",
                category: "Career Tips",
                tags: ["networking", "career", "professional"]
            },
            {
                id: 5,
                title: "How to Write a Winning Resume",
                excerpt: "Create a resume that gets noticed by recruiters and lands you interviews.",
                image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                date: "March 5, 2024",
                readTime: "6 min",
                author: "Lisa Wang",
                category: "Resume Writing",
                tags: ["resume", "cv", "job"]
            },
            {
                id: 6,
                title: "10 Common Interview Mistakes to Avoid",
                excerpt: "Learn from others' mistakes and avoid these common pitfalls in your next interview.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                date: "March 3, 2024",
                readTime: "5 min",
                author: "James Wilson",
                category: "Interview Prep",
                tags: ["interview", "mistakes", "tips"]
            },
            {
                id: 7,
                title: "Negotiating Your First Internship Offer",
                excerpt: "Get the compensation and benefits you deserve with these negotiation strategies.",
                image: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                date: "February 28, 2024",
                readTime: "7 min",
                author: "Sarah Johnson",
                category: "Career Tips",
                tags: ["negotiation", "offer", "salary"]
            },
            {
                id: 8,
                title: "Time Management for Student Interns",
                excerpt: "Balance coursework, internship, and personal life with effective time management techniques.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
                date: "February 25, 2024",
                readTime: "6 min",
                author: "Maria Garcia",
                category: "Skill Development",
                tags: ["time", "management", "student"]
            }
        ];

        // Initialize blog
        document.addEventListener('DOMContentLoaded', function() {
            renderBlogPosts();
            setupEventListeners();
        });

        // Render blog posts
        function renderBlogPosts() {
            const blogPostsContainer = document.getElementById('blogPosts');
            blogPostsContainer.innerHTML = '';
            
            blogPosts.forEach(post => {
                const postElement = createBlogPostElement(post);
                blogPostsContainer.appendChild(postElement);
            });
        }

        // Create blog post element
        function createBlogPostElement(post) {
            const article = document.createElement('article');
            article.className = 'blog-post';
            article.dataset.id = post.id;
            
            article.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="category">${post.category}</span>
                        <span class="date">${post.date}</span>
                        <span class="read-time">${post.readTime} read</span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <div class="post-footer">
                        <span class="author"><i class="fas fa-user"></i> ${post.author}</span>
                        <a href="blog-details.html?id=${post.id}" class="read-more">
                            Read More <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
            
            return article;
        }

        // Setup event listeners
        function setupEventListeners() {
            // Search functionality
            const searchInput = document.querySelector('.blog-search input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                filterBlogPosts(searchTerm);
            });
            
            // Mobile menu toggle
            document.querySelector('.hamburger').addEventListener('click', function() {
                document.querySelector('.nav-menu').classList.toggle('show');
            });
            
            // Category filter
            document.querySelectorAll('.categories-list a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const category = this.textContent.split(' ')[0];
                    filterByCategory(category);
                });
            });
            
            // Tag filter
            document.querySelectorAll('.tag-cloud').forEach(tag => {
                tag.addEventListener('click', function(e) {
                    e.preventDefault();
                    const tagText = this.textContent.toLowerCase();
                    filterByTag(tagText);
                });
            });
            
            // Newsletter subscription
            document.querySelector('.newsletter-widget button').addEventListener('click', function() {
                const email = document.querySelector('.newsletter-widget input').value;
                if (email && email.includes('@')) {
                    alert('Thank you for subscribing to our newsletter!');
                    document.querySelector('.newsletter-widget input').value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        }

        // Filter blog posts by search term
        function filterBlogPosts(searchTerm) {
            const filteredPosts = blogPosts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) ||
                post.excerpt.toLowerCase().includes(searchTerm) ||
                post.author.toLowerCase().includes(searchTerm) ||
                post.category.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.includes(searchTerm))
            );
            
            const blogPostsContainer = document.getElementById('blogPosts');
            blogPostsContainer.innerHTML = '';
            
            if (filteredPosts.length > 0) {
                filteredPosts.forEach(post => {
                    const postElement = createBlogPostElement(post);
                    blogPostsContainer.appendChild(postElement);
                });
            } else {
                blogPostsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search fa-2x"></i>
                        <h3>No articles found</h3>
                        <p>Try adjusting your search terms</p>
                    </div>
                `;
            }
        }

        // Filter by category
        function filterByCategory(category) {
            const filteredPosts = blogPosts.filter(post => 
                post.category.toLowerCase().includes(category.toLowerCase())
            );
            
            updateBlogDisplay(filteredPosts, `Showing posts in: ${category}`);
        }

        // Filter by tag
        function filterByTag(tag) {
            const filteredPosts = blogPosts.filter(post => 
                post.tags.includes(tag)
            );
            
            updateBlogDisplay(filteredPosts, `Showing posts tagged: ${tag}`);
        }

        // Update blog display
        function updateBlogDisplay(filteredPosts, message) {
            const blogPostsContainer = document.getElementById('blogPosts');
            blogPostsContainer.innerHTML = '';
            
            if (filteredPosts.length > 0) {
                filteredPosts.forEach(post => {
                    const postElement = createBlogPostElement(post);
                    blogPostsContainer.appendChild(postElement);
                });
                
                // Add filter message
                const messageElement = document.createElement('div');
                messageElement.className = 'filter-message';
                messageElement.innerHTML = `
                    <p>${message} <button onclick="clearFilters()">Clear</button></p>
                `;
                blogPostsContainer.prepend(messageElement);
            } else {
                blogPostsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search fa-2x"></i>
                        <h3>No articles found</h3>
                        <p>Try a different category or tag</p>
                    </div>
                `;
            }
        }

        // Clear filters
        function clearFilters() {
            renderBlogPosts();
        }

        // Make functions globally available
        window.clearFilters = clearFilters;
  