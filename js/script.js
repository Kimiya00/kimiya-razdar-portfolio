    // Kimiya's Portfolio JavaScript
    // Built with vanilla JS because I like understanding how things actually work
    // If you're reading this during an interview: Hi! Let's talk about these implementation choices.

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================================================
    // TYPING ANIMATION
    // ==========================================================================
    
    const typingTexts = [
        'AI Operations & IT Specialist',
        'Prompt Engineering Expert',
        'Problem Solver & Automator',
        'AI Tools Specialist',
        'Data-Driven Decision Maker',
        'Continuous Learner',
        'Neuroscience Graduate Turned Tech Pro'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');
    
    function typeWriter() {
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
    
    // ==========================================================================
    // SMOOTH SCROLLING NAVIGATION
    // ==========================================================================
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scroll to target
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================================================
    // SKILLS ANIMATION (Animate on Scroll)
    // ==========================================================================
    
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth + '%';
        });
    }
    
    // Animate hero stats counter
    function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const original = stat.getAttribute('data-original');
        const target = parseInt(original);
        
        if (isNaN(target)) return;
        
        const suffix = original.replace(/[0-9]/g, '');
        let count = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                stat.textContent = target + suffix;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(count) + suffix;
            }
        }, 30);
    });
}

    // ==========================================================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================================================
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills-section')) {
                    animateSkills();
                }
                if (entry.target.classList.contains('about-section')) {
                    animateStats();
                }

                // Add fade-in animation  
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
        
            // Unobserve after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Skip hero section from fade-in animation
    if (section.classList.contains('hero-section')) return;
    
        // Set initial state for animation
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        section.style.minHeight = '100px';

        observer.observe(section);
    });
    
    // ==========================================================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ==========================================================================
    
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // ==========================================================================
    // CONTACT FORM HANDLING
    // ==========================================================================
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message received! I\'ll respond faster than my code compiles.', 'success');

            // Reset form
            this.reset();

            // TODO: Integrate EmailJS when ready
            console.log('Form submitted:', {
                name: name,
                email: email,
                subject: subject
        });
        });
    }
    
    // ==========================================================================
    // EMAIL VALIDATION
    // ==========================================================================
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ==========================================================================
    // NOTIFICATION SYSTEM
    // ==========================================================================
    
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        // Set styles
        const baseStyles = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            color: white;
            font-weight: 500;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s ease;
            max-width: 400px;
        `;
        
        let bgColor = '#3b82f6'; // Default blue
        if (type === 'success') bgColor = '#10b981';
        if (type === 'error') bgColor = '#ef4444';
        if (type === 'warning') bgColor = '#f59e0b';
        
        notification.style.cssText = baseStyles + `background-color: ${bgColor};`;
        notification.textContent = message;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Trigger entrance animation
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // ==========================================================================
    // PROJECT CARD INTERACTIONS
    // ==========================================================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ==========================================================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================================================
    
    // Throttle scroll events for better performance
    function throttle(func, wait) {
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
    
    // Apply throttling to scroll event
    window.addEventListener('scroll', throttle(updateActiveNav, 100));
    
    // ==========================================================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==========================================================================
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Allow Tab navigation through interactive elements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================
    
    // Initialize active nav state
    updateActiveNav();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Log successful initialization
    console.log('Portfolio JavaScript initialized successfully');

    // Console Easter Eggs
    console.log('%c👋 Hey there, code inspector!', 
        'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%c🔍 Checking out the code? I wrote this while learning JavaScript, debugging errors, and drinking way too much coffee.', 
        'font-size: 14px; color: #64748b;');
    console.log('%c💼 Looking for someone who reads documentation AND actually implements it? Let\'s talk: razdarkim@gmail.com', 
        'font-size: 14px; color: #10b981; font-weight: bold;');
    console.log('%c🤖 Fun fact: I engineered 100+ AI prompts in production. Want to see what I can do with yours?', 
        'font-size: 12px; font-style: italic; color: #f59e0b;');
    console.log('%cP.S. - All animations are vanilla JS. No frameworks, no libraries, just problem-solving.', 
        'font-size: 11px; color: #94a3b8;');
});

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Smooth scroll to element (fallback for older browsers)
function smoothScrollTo(element) {
    if ('scrollBehavior' in document.documentElement.style) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // Fallback for older browsers
        const targetPosition = element.offsetTop - 100;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;
        
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            
            window.scrollTo(0, startPosition + distance * easeInOutCubic(progressPercentage));
            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
        
        window.requestAnimationFrame(step);
    }
}

// Easing function for smooth animations
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

document.getElementById('current-year').textContent = new Date().getFullYear();