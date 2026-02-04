// blog-detail.js - Dynamic blog detail page functionality

// Get blog post ID from URL
function getBlogIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    return isNaN(id) ? 1 : id; // Default to ID 1 if not valid
}

// Load and display blog post
function loadBlogPost() {
    const blogId = getBlogIdFromURL();
    const blogPost = window.blogPostsData.find(post => post.id === blogId);
    
    if (!blogPost) {
        // If post not found, redirect to blog list
        window.location.href = 'blog.html';
        return;
    }
    
    // Update page title
    document.title = `${blogPost.title} - INTERNEE.PK`;
    
    // Update breadcrumb
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = blogPost.title;
    }
    
    // Update main title
    const postTitle = document.getElementById('postTitle');
    if (postTitle) {
        postTitle.textContent = blogPost.title;
    }
    
    // Update post meta
    document.getElementById('postAuthor').innerHTML = `<i class="fas fa-user"></i> By ${blogPost.author}`;
    document.getElementById('postDate').innerHTML = `<i class="far fa-calendar"></i> ${blogPost.date}`;
    document.getElementById('postReadTime').innerHTML = `<i class="far fa-clock"></i> ${blogPost.readTime}`;
    document.getElementById('postCategory').innerHTML = `<i class="fas fa-tag"></i> ${blogPost.category}`;
    
    // Update post image
    const postImage = document.getElementById('postImage');
    if (postImage) {
        postImage.src = blogPost.image;
        postImage.alt = blogPost.title;
    }
    
    // Update post content
    const postContent = document.getElementById('postContent');
    if (postContent) {
        postContent.innerHTML = blogPost.content + getTagsHTML(blogPost.tags) + getShareHTML();
    }
    
    // Update author bio
    document.getElementById('authorName').textContent = blogPost.author;
    document.getElementById('authorTitle').textContent = `${blogPost.category} Expert`;
    document.getElementById('authorBio').textContent = blogPost.authorBio;
    
    // Update author image
    const authorImage = document.getElementById('authorImage');
    if (authorImage) {
        authorImage.src = blogPost.authorImage;
        authorImage.alt = blogPost.author;
    }
    
    // Update related posts
    updateRelatedPosts(blogId, blogPost.category);
    
    // Setup share buttons
    setupShareButtons(blogPost);
}

// Generate HTML for tags
function getTagsHTML(tags) {
    if (!tags || tags.length === 0) return '';
    
    const tagsHTML = tags.map(tag => 
        `<a href="blog.html?search=${encodeURIComponent(tag)}" class="tag">${tag}</a>`
    ).join('\n');
    
    return `
        <div class="post-tags">
            <span>Tags:</span>
            ${tagsHTML}
        </div>
    `;
}

// Generate HTML for share buttons
function getShareHTML() {
    return `
        <div class="post-share">
            <span>Share this article:</span>
            <div class="share-buttons">
                <a href="#" class="share-btn" data-platform="facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" class="share-btn" data-platform="twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="share-btn" data-platform="linkedin"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="share-btn" data-platform="whatsapp"><i class="fab fa-whatsapp"></i></a>
                <a href="#" class="share-btn" data-platform="email"><i class="far fa-envelope"></i></a>
            </div>
        </div>
    `;
}

// Update related posts
function updateRelatedPosts(currentId, category) {
    const relatedPosts = window.blogPostsData
        .filter(post => post.id !== currentId && post.category === category)
        .slice(0, 3); // Get first 3 related posts
    
    const relatedGrid = document.getElementById('relatedPosts');
    if (!relatedGrid || relatedPosts.length === 0) return;
    
    relatedGrid.innerHTML = '';
    
    relatedPosts.forEach(post => {
        const relatedPostHTML = `
            <a href="blog-details.html?id=${post.id}" class="related-post">
                <img src="${post.image}" alt="${post.title}">
                <div class="related-content">
                    <h3>${post.title}</h3>
                    <span class="related-meta">${post.date} • ${post.readTime}</span>
                </div>
            </a>
        `;
        relatedGrid.insertAdjacentHTML('beforeend', relatedPostHTML);
    });
}

// Setup share buttons functionality
function setupShareButtons(blogPost) {
    const pageUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blogPost.title);
    const description = encodeURIComponent(blogPost.excerpt);
    
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.getAttribute('data-platform');
            
            let shareUrl = '';
            
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${pageUrl}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${title}&summary=${description}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${title}%20${pageUrl}`;
                    break;
                case 'email':
                    shareUrl = `mailto:?subject=${title}&body=Check out this article: ${pageUrl}`;
                    break;
            }
            
            if (platform === 'email') {
                window.location.href = shareUrl;
            } else {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load the blog post
    loadBlogPost();
});