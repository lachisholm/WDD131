document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector (".hamburger");
    const nav = document.querySelector(".main-nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("open");
});
    }
});














/**
 * Navigation and UI functionality for Kavia Task Manager
 */

class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.setActiveNavLink();
        this.initializeTheme();
    }

    bindEvents() {
        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenuToggle && navLinks) {
            mobileMenuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                this.updateMobileMenuIcon(navLinks.classList.contains('active'));
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('header') && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    this.updateMobileMenuIcon(false);
                }
            });

            // Close mobile menu when clicking on a nav link
            navLinks.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    navLinks.classList.remove('active');
                    this.updateMobileMenuIcon(false);
                }
            });
        }

        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        // Add loading states to buttons
        this.addLoadingStates();

        // Add keyboard navigation
        this.addKeyboardNavigation();
    }

    updateMobileMenuIcon(isOpen) {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.textContent = isOpen ? '✕' : '☰';
            mobileMenuToggle.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }

    setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html') ||
                (currentPage === 'dashboard.html' && linkHref === 'dashboard.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    addLoadingStates() {
        // Add loading state to form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const submitBtn = form.querySelector('button[type="submit"], .add-btn');
                if (submitBtn) {
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = 'Loading...';
                    submitBtn.disabled = true;
                    
                    // Reset after a short delay (simulating async operation)
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 1000);
                }
            });
        });

        // Add loading state to action buttons
        const actionButtons = document.querySelectorAll('.action-btn');
        actionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (!btn.disabled) {
                    const originalText = btn.textContent;
                    btn.textContent = 'Processing...';
                    btn.disabled = true;
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 1500);
                }
            });
        });
    }

    addKeyboardNavigation() {
        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter to add task
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                const addTaskBtn = document.getElementById('addTaskBtn');
                if (addTaskBtn && !addTaskBtn.disabled) {
                    addTaskBtn.click();
                    e.preventDefault();
                }
            }

            // Escape to close mobile menu
            if (e.key === 'Escape') {
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    this.updateMobileMenuIcon(false);
                }
            }

            // Alt + H to go to home
            if (e.altKey && e.key === 'h') {
                window.location.href = 'index.html';
                e.preventDefault();
            }

            // Alt + D to go to dashboard
            if (e.altKey && e.key === 'd') {
                window.location.href = 'dashboard.html';
                e.preventDefault();
            }
        });

        // Add focus management for better accessibility
        this.improveFocusManagement();
    }

    improveFocusManagement() {
        // Add focus indicators
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid #4c63d2';
                element.style.outlineOffset = '2px';
            });

            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });

        // Skip links for better accessibility
        this.addSkipLinks();
    }

    addSkipLinks() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #4c63d2;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add id to main content if it doesn't exist
        const mainContent = document.querySelector('main, .main-content');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    }

    initializeTheme() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('kaviaTheme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
        }

        // Add theme toggle functionality (if theme toggle button exists)
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('kaviaTheme', newTheme);
        
        // Update theme toggle button text if it exists
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Utility methods
    static showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: inherit;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: 10px;
            padding: 0;
        `;
        closeBtn.addEventListener('click', () => {
            this.removeNotification(notification);
        });
        
        notification.appendChild(closeBtn);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            this.removeNotification(notification);
        }, duration);

        return notification;
    }

    static removeNotification(notification) {
        if (notification && notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Performance monitoring
    static measurePerformance(name, fn) {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${name} took ${end - start} milliseconds`);
        return result;
    }

    // Local storage utilities
    static saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    }

    static loadFromStorage(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return defaultValue;
        }
    }

    static clearStorage(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }
}

// Initialize navigation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationManager;
}

// Add to global scope for easy access
window.NavigationManager = NavigationM