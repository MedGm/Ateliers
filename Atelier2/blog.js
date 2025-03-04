class User {
    constructor(id, username, email, password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

class Post {
    constructor(id, title, content, userId, date = new Date()) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.date = date;
    }
}

class Blog {
    constructor() {
        this.users = [];
        this.posts = [];
        this.currentUser = null;

        // on va chercher les données dans le local storage
        this.loadData();
        
        // initialisation de UI et des events listeners
        this.setupEventListeners();
        this.updateUI();
    }
    
    setupEventListeners() {
        document.getElementById('loginBtn').addEventListener('click', () => {
            this.showLoginForm();
        });
        
        document.getElementById('signupBtn').addEventListener('click', () => {
            this.showSignupForm();
        });
        
        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });
        
        document.getElementById('addPostBtn').addEventListener('click', () => {
            this.showAddPostForm();
        });
        
        // Update close buttons functionality
        document.querySelectorAll('.closeModal').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                this.closeAllModals();
            });
        });
        
        // Also close modal when clicking outside the modal content
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    this.closeAllModals();
                }
            });
        });
        
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            this.login(username, password);
        });
        
        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signupUsername').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            this.register(username, email, password);
        });
        
        document.getElementById('postForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('postTitle').value;
            const content = document.getElementById('postContent').value;
            this.addPost(title, content);
        });
    }
    
    // Helper method to close all modals
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    updateUI() {

        if (this.currentUser) {
            document.getElementById('loginBtn').style.display = 'none';
            document.getElementById('signupBtn').style.display = 'none';
            document.getElementById('logoutBtn').style.display = 'inline-block';
            document.getElementById('logoutBtn').textContent = `Logout (${this.currentUser.username})`;
            document.getElementById('addPostBtn').style.display = 'inline-block';
        } else {
            document.getElementById('loginBtn').style.display = 'inline-block';
            document.getElementById('signupBtn').style.display = 'inline-block';
            document.getElementById('logoutBtn').style.display = 'none';
            document.getElementById('addPostBtn').style.display = 'none';
        }
        
        this.renderPosts();
    }
    
    renderPosts() {
        const container = document.getElementById('postsContainer');
        container.innerHTML = '';
        
        if (this.posts.length === 0) {
            container.innerHTML = '<p class="text-gray-400 text-center py-16">No posts yet. Be the first to create one!</p>';
            return;
        }
        
        // Sort posts by date (newest first)
        const sortedPosts = [...this.posts].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );
        
        sortedPosts.forEach(post => {
            const author = this.users.find(u => u.id === post.userId) || { username: 'Unknown' };
            const postDate = new Date(post.date).toLocaleDateString();
            
            const postEl = document.createElement('div');
            postEl.className = 'bg-white border-l-4 border-[#06D6A0] p-6 rounded-lg shadow-md mb-6';
            postEl.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${post.title}</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">${post.content}</p>
                <div class="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span class="font-medium">By: ${author.username}</span>
                    <span>${postDate}</span>
                </div>
            `;
            container.appendChild(postEl);
        });
    }
    
    showLoginForm() {
        this.closeAllModals();
        document.getElementById('loginModal').classList.add('active');
        document.getElementById('loginUsername').focus();
    }
    
    showSignupForm() {
        this.closeAllModals();
        document.getElementById('signupModal').classList.add('active');
        document.getElementById('signupUsername').focus();
    }
    
    showAddPostForm() {
        if (!this.currentUser) {
            alert('Please log in to create a post');
            return;
        }
        
        this.closeAllModals();
        document.getElementById('postModal').classList.add('active');
        document.getElementById('postTitle').focus();
    }
    
    login(username, password) {
        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }
        
        const user = this.users.find(u => 
            u.username === username && u.password === password
        );
        
        if (user) {
            this.currentUser = user;
            this.saveData();
            this.updateUI();
            this.closeAllModals();
            document.getElementById('loginForm').reset();
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
        }
    }
    
    register(username, email, password) {
        if (!username || !email || !password) {
            alert('All fields are required');
            return;
        }
        
        if (this.users.some(u => u.username === username)) {
            alert('Username already taken');
            return;
        }
        
        if (this.users.some(u => u.email === email)) {
            alert('Email already registered');
            return;
        }
        
        const newUser = new User(
            Date.now().toString(),
            username,
            email,
            password
        );
        
        this.users.push(newUser);
        this.currentUser = newUser;
        this.saveData();
        this.updateUI();
        
        this.closeAllModals();
        document.getElementById('signupForm').reset();
        alert('Registration successful!');
    }
    
    logout() {
        this.currentUser = null;
        this.saveData();
        this.updateUI();
        alert('Logged out successfully');
    }
    
    addPost(title, content) {
        if (!this.currentUser) {
            alert('Please log in to create a post');
            return;
        }
        
        if (!title || !content) {
            alert('Title and content are required');
            return;
        }
        
        const newPost = new Post(
            Date.now().toString(),
            title,
            content,
            this.currentUser.id,
            new Date()
        );
        
        this.posts.push(newPost);
        this.saveData();
        this.updateUI();
        
        this.closeAllModals();
        document.getElementById('postForm').reset();
        alert('Post created successfully!');
    }
    
    saveData() {
        try {
            localStorage.setItem('blog_users', JSON.stringify(this.users));
            localStorage.setItem('blog_posts', JSON.stringify(this.posts));
            localStorage.setItem('blog_current_user', JSON.stringify(this.currentUser));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
    
    loadData() {
        try {
            const storedUsers = localStorage.getItem('blog_users');
            if (storedUsers) {
                this.users = JSON.parse(storedUsers);
            }
            
            const storedPosts = localStorage.getItem('blog_posts');
            if (storedPosts) {
                this.posts = JSON.parse(storedPosts);
            }
            
            const currentUser = localStorage.getItem('blog_current_user');
            if (currentUser && currentUser !== 'null') {
                this.currentUser = JSON.parse(currentUser);
            }
        } catch (error) {
            console.error('Error loading data:', error);
            this.users = [];
            this.posts = [];
            this.currentUser = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Blog();
});